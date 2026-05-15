const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
const ambientBackground = document.querySelector<HTMLElement>('[data-ambient-background]');
const ambientCanvas = document.querySelector<HTMLCanvasElement>('[data-ambient-canvas]');

document.querySelectorAll<HTMLElement>('[data-project-card]').forEach((project) => {
	let frame: number | null = null;
	let mouseX = 0;
	let mouseY = 0;

	project.addEventListener('mousemove', (event) => {
		const rect = project.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = event.clientY - rect.top;

		if (frame !== null) return;

		frame = window.requestAnimationFrame(() => {
			project.style.setProperty('--mx', `${Math.round(mouseX)}px`);
			project.style.setProperty('--my', `${Math.round(mouseY)}px`);
			frame = null;
		});
	});
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight * 0.38;
let currentScrollY = window.scrollY;
let viewportWidth = Math.max(window.innerWidth, 1);
let viewportHeight = Math.max(window.innerHeight, 1);

const ambientVars = new Map<string, string>();
const setAmbientVar = (name: string, value: string) => {
	if (!ambientBackground || ambientVars.get(name) === value) return;

	ambientBackground.style.setProperty(name, value);
	ambientVars.set(name, value);
};

setAmbientVar('--pointer-drift-x', '0px');
setAmbientVar('--pointer-drift-y', '0px');
setAmbientVar('--bg-shift', '0px');

if (!reduceMotion && 'IntersectionObserver' in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				const target = entry.target as HTMLElement;
				delete target.dataset.pendingReveal;
				target.dataset.revealed = 'true';
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.12 },
	);

	revealTargets.forEach((element, index) => {
		element.dataset.pendingReveal = 'true';
		element.style.transitionDelay = `${(index % 6) * 60}ms`;
		observer.observe(element);
	});
} else {
	revealTargets.forEach((element) => {
		element.dataset.revealed = 'true';
	});
}

if (!reduceMotion && ambientBackground) {
	let backgroundFrame: number | null = null;
	let pointerDirty = supportsFinePointer;
	let scrollDirty = true;
	let liquidCanvas: ReturnType<typeof createAmbientLiquidCanvas> | null = null;

	const px = (value: number) => `${Math.round(value * 2) / 2}px`;
	const updatePointerVars = () => {
		const driftX = ((pointerX / viewportWidth) - 0.5) * 168;
		const driftY = ((pointerY / viewportHeight) - 0.5) * 126;

		setAmbientVar('--pointer-drift-x', px(driftX));
		setAmbientVar('--pointer-drift-y', px(driftY));
	};

	const updateScrollVars = () => {
		const shift = Math.min(currentScrollY * 0.28, 180);

		setAmbientVar('--bg-shift', px(shift));
	};

	const scheduleBackgroundUpdate = () => {
		if (backgroundFrame !== null) return;

		backgroundFrame = window.requestAnimationFrame(() => {
			if (pointerDirty) updatePointerVars();
			if (scrollDirty) updateScrollVars();

			pointerDirty = false;
			scrollDirty = false;
			backgroundFrame = null;
		});
	};

	if (supportsFinePointer) {
		window.addEventListener(
			'pointermove',
			(event) => {
				pointerX = event.clientX;
				pointerY = event.clientY;
				pointerDirty = true;
				scheduleBackgroundUpdate();
			},
			{ passive: true },
		);
	}

	window.addEventListener(
		'resize',
		() => {
			viewportWidth = Math.max(window.innerWidth, 1);
			viewportHeight = Math.max(window.innerHeight, 1);
			pointerDirty = supportsFinePointer;
			scrollDirty = true;
			liquidCanvas?.resize();
			scheduleBackgroundUpdate();
		},
		{ passive: true },
	);

	window.addEventListener(
		'scroll',
		() => {
			currentScrollY = window.scrollY;
			scrollDirty = true;
			scheduleBackgroundUpdate();
		},
		{ passive: true },
	);

	scheduleBackgroundUpdate();
	window.setTimeout(() => {
		liquidCanvas = ambientCanvas
			? createAmbientLiquidCanvas(ambientCanvas, () => ({
					pointerX,
					pointerY,
					scrollY: currentScrollY,
					supportsFinePointer,
					viewportHeight,
					viewportWidth,
				}))
			: null;
		liquidCanvas?.start();
	}, 0);
} else if (ambientCanvas) {
	window.setTimeout(() => drawStaticAmbientCanvas(ambientCanvas), 0);
}

type AmbientState = {
	bottomLift: number;
	parallaxX: number;
	parallaxY: number;
	pointerX: number;
	pointerY: number;
	scrollY: number;
	supportsFinePointer: boolean;
	viewportHeight: number;
	viewportWidth: number;
};

type AmbientInputState = Omit<AmbientState, 'bottomLift' | 'parallaxX' | 'parallaxY'>;

type LiquidBlob = {
	alpha: number;
	hue: number;
	lobes: number;
	phase: number;
	radius: number;
	x: number;
	y: number;
};

type WakePoint = {
	angle: number;
	life: number;
	speed: number;
	x: number;
	y: number;
};

type LiquidDrop = {
	alphaScale: number;
	blobIndex: number;
	distance: number;
	homeAngle: number;
	phase: number;
	radiusScale: number;
	vx: number;
	vy: number;
	x: number;
	y: number;
};

const liquidBlobs: LiquidBlob[] = [
	{ alpha: 0.14, hue: 188, lobes: 2, phase: 0.2, radius: 0.72, x: 0.08, y: 0.12 },
	{ alpha: 0.12, hue: 258, lobes: 2, phase: 1.1, radius: 0.58, x: 0.35, y: 0.08 },
	{ alpha: 0.15, hue: 338, lobes: 2, phase: 2.1, radius: 0.76, x: 0.68, y: 0.12 },
	{ alpha: 0.11, hue: 76, lobes: 2, phase: 3.4, radius: 0.54, x: 0.92, y: 0.18 },
	{ alpha: 0.12, hue: 206, lobes: 2, phase: 4.1, radius: 0.62, x: 0.18, y: 0.45 },
	{ alpha: 0.13, hue: 126, lobes: 2, phase: 5.2, radius: 0.66, x: 0.48, y: 0.44 },
	{ alpha: 0.11, hue: 286, lobes: 2, phase: 0.7, radius: 0.58, x: 0.78, y: 0.48 },
	{ alpha: 0.1, hue: 42, lobes: 2, phase: 2.8, radius: 0.56, x: 0.05, y: 0.74 },
	{ alpha: 0.12, hue: 166, lobes: 2, phase: 4.8, radius: 0.68, x: 0.36, y: 0.78 },
	{ alpha: 0.12, hue: 246, lobes: 2, phase: 6.1, radius: 0.64, x: 0.68, y: 0.76 },
	{ alpha: 0.1, hue: 326, lobes: 2, phase: 3.9, radius: 0.52, x: 0.94, y: 0.82 },
];

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const hsla = (hue: number, alpha: number) => `hsla(${hue}, 92%, 64%, ${alpha})`;

function getCanvasScale(width: number) {
	const dpr = Math.min(window.devicePixelRatio || 1, 1.3);
	const resolution = width >= 1100 ? 0.6 : 0.76;

	return dpr * resolution;
}

function resizeCanvas(canvas: HTMLCanvasElement) {
	const rect = canvas.getBoundingClientRect();
	const width = Math.max(Math.round(rect.width), 1);
	const height = Math.max(Math.round(rect.height), 1);
	const scale = getCanvasScale(width);
	const pixelWidth = Math.round(width * scale);
	const pixelHeight = Math.round(height * scale);

	if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
		canvas.width = pixelWidth;
		canvas.height = pixelHeight;
	}

	return { height, scale, width };
}

function createNoisePattern(context: CanvasRenderingContext2D) {
	const size = 128;
	const tile = document.createElement('canvas');
	const tileContext = tile.getContext('2d');

	tile.width = size;
	tile.height = size;
	if (!tileContext) return null;

	const image = tileContext.createImageData(size, size);

	for (let index = 0; index < image.data.length; index += 4) {
		const shade = Math.random() > 0.5 ? 255 : 0;
		image.data[index] = shade;
		image.data[index + 1] = shade;
		image.data[index + 2] = shade;
		image.data[index + 3] = 18 + Math.random() * 22;
	}

	tileContext.putImageData(image, 0, 0);

	return context.createPattern(tile, 'repeat');
}

function paintLiquidOrb(
	context: CanvasRenderingContext2D,
	x: number,
	y: number,
	radius: number,
	hue: number,
	alpha: number,
	stretchX = 1,
	stretchY = 1,
) {
	context.save();
	context.translate(x, y);
	context.scale(stretchX, stretchY);

	const gradient = context.createRadialGradient(0, 0, radius * 0.02, 0, 0, radius);
	gradient.addColorStop(0, hsla(hue, alpha * 0.68));
	gradient.addColorStop(0.28, hsla(hue, alpha * 0.36));
	gradient.addColorStop(0.64, hsla(hue, alpha * 0.13));
	gradient.addColorStop(0.86, hsla(hue, alpha * 0.035));
	gradient.addColorStop(1, hsla(hue, 0));

	context.fillStyle = gradient;
	context.beginPath();
	context.arc(0, 0, radius, 0, Math.PI * 2);
	context.fill();
	context.restore();
}

function getBlobHome(
	blob: LiquidBlob,
	blobIndex: number,
	width: number,
	height: number,
	time: number,
	state: AmbientState,
) {
	const scrollWave = state.scrollY * 0.00115;
	const row = blob.y > 0.66 ? 2 : blob.y > 0.33 ? 1 : 0;
	const direction = blobIndex % 2 === 0 ? 1 : -1;
	const parallaxX =
		state.parallaxX * direction * (0.92 + blobIndex * 0.11) +
		Math.sin(scrollWave + blob.phase * 1.4) * (20 + blobIndex * 4);
	const parallaxY =
		state.parallaxY * (0.42 + row * 0.14) +
		Math.cos(scrollWave * 0.46 + blob.phase) * (10 + blobIndex * 1.4) -
		state.bottomLift * height * (0.12 + row * 0.22);

	return {
		x:
			width * blob.x +
			Math.sin(time * 0.13 + blob.phase) * 42 +
			Math.sin(time * 0.047 + blob.phase * 2.1) * 24 +
			parallaxX,
		y:
			height * blob.y +
			Math.cos(time * 0.11 + blob.phase) * 36 +
			Math.sin(time * 0.052 + blob.phase * 1.7) * 22 +
			parallaxY,
	};
}

function createLiquidDrops(width: number, height: number) {
	const shortestSide = Math.min(width, height);

	return liquidBlobs.flatMap((blob, blobIndex) => {
		const home = getBlobHome(blob, blobIndex, width, height, 0, {
			bottomLift: 0,
			parallaxX: 0,
			parallaxY: 0,
			pointerX: width / 2,
			pointerY: height * 0.38,
			scrollY: 0,
			supportsFinePointer: false,
			viewportHeight: height,
			viewportWidth: width,
		});
		const baseRadius = shortestSide * blob.radius;
		const drops: LiquidDrop[] = [
			{
				alphaScale: 0.86,
				blobIndex,
				distance: 0,
				homeAngle: 0,
				phase: blob.phase,
				radiusScale: 0.66,
				vx: 0,
				vy: 0,
				x: home.x,
				y: home.y,
			},
		];

		for (let index = 0; index < blob.lobes; index += 1) {
			const angle = (index / blob.lobes) * Math.PI * 2 + blob.phase;
			const distance = baseRadius * (0.18 + (index % 3) * 0.035);

			drops.push({
				alphaScale: 0.48 + (index % 2) * 0.1,
				blobIndex,
				distance,
				homeAngle: angle,
				phase: blob.phase + index * 0.73,
				radiusScale: 0.4 + (index % 3) * 0.052,
				vx: 0,
				vy: 0,
				x: home.x + Math.cos(angle) * distance,
				y: home.y + Math.sin(angle) * distance * 0.78,
			});
		}

		return drops;
	});
}

function updateLiquidDrops(
	drops: LiquidDrop[],
	width: number,
	height: number,
	time: number,
	state: AmbientState,
	easedPointer: { x: number; y: number },
	pointerVelocity: { x: number; y: number },
) {
	const shortestSide = Math.min(width, height);
	const speed = Math.hypot(pointerVelocity.x, pointerVelocity.y);
	const normalX = speed > 0 ? -pointerVelocity.y / speed : 0;
	const normalY = speed > 0 ? pointerVelocity.x / speed : 0;

	drops.forEach((drop) => {
		const blob = liquidBlobs[drop.blobIndex];
		const baseRadius = shortestSide * blob.radius;
		const home = getBlobHome(blob, drop.blobIndex, width, height, time, state);
		const homeAngle = drop.homeAngle + Math.sin(time * 0.18 + drop.phase) * 0.24;
		const targetX = home.x + Math.cos(homeAngle) * drop.distance;
		const targetY = home.y + Math.sin(homeAngle) * drop.distance * 0.78;
		const dropRadius = baseRadius * drop.radiusScale;
		const dx = drop.x - easedPointer.x;
		const dy = drop.y - easedPointer.y;
		const distanceFromPointer = Math.hypot(dx, dy) || 1;
		const sliceReach = dropRadius * 0.82 + Math.min(speed, 54) * 2.2;

		drop.vx += (targetX - drop.x) * 0.014;
		drop.vy += (targetY - drop.y) * 0.014;

		if (state.supportsFinePointer && speed > 1.4 && distanceFromPointer < sliceReach) {
			const side = Math.sign(dx * normalX + dy * normalY) || (drop.phase % 2 > 1 ? 1 : -1);
			const cut = Math.pow(1 - distanceFromPointer / sliceReach, 2);
			const impulse = cut * Math.min(speed, 42) * 0.14;

			drop.vx += normalX * side * impulse + (dx / distanceFromPointer) * impulse * 0.16;
			drop.vy += normalY * side * impulse + (dy / distanceFromPointer) * impulse * 0.16;
		}
	});

	for (let outer = 0; outer < drops.length; outer += 1) {
		for (let inner = outer + 1; inner < drops.length; inner += 1) {
			const a = drops[outer];
			const b = drops[inner];
			if (a.blobIndex !== b.blobIndex) continue;

			const blob = liquidBlobs[a.blobIndex];
			const baseRadius = shortestSide * blob.radius;
			const ax = b.x - a.x;
			const ay = b.y - a.y;
			const distance = Math.hypot(ax, ay) || 1;
			const desired = baseRadius * (a.radiusScale + b.radiusScale) * 0.24;
			const nx = ax / distance;
			const ny = ay / distance;

			if (distance < desired) {
				const push = (desired - distance) * 0.006;
				a.vx -= nx * push;
				a.vy -= ny * push;
				b.vx += nx * push;
				b.vy += ny * push;
			} else if (distance < desired * 3.8) {
				const pull = (distance - desired) * 0.0018;
				a.vx += nx * pull;
				a.vy += ny * pull;
				b.vx -= nx * pull;
				b.vy -= ny * pull;
			}
		}
	}

	drops.forEach((drop) => {
		drop.vx *= 0.9;
		drop.vy *= 0.9;
		drop.x += drop.vx;
		drop.y += drop.vy;
	});
}

function drawLiquidBlobs(
	context: CanvasRenderingContext2D,
	width: number,
	height: number,
	time: number,
	state: AmbientState,
	easedPointer: { x: number; y: number },
	wake: WakePoint[],
	drops: LiquidDrop[],
) {
	const shortestSide = Math.min(width, height);

	context.globalCompositeOperation = 'source-over';

	drops.forEach((drop) => {
		const blob = liquidBlobs[drop.blobIndex];
		const hue = blob.hue + Math.sin(time * 0.12 + blob.phase) * 10;
		const radius = shortestSide * blob.radius * drop.radiusScale;
		const dx = easedPointer.x - drop.x;
		const dy = easedPointer.y - drop.y;
		const distance = Math.hypot(dx, dy) || 1;
		const influence = state.supportsFinePointer
			? Math.pow(clamp(1 - distance / (radius * 0.68)), 2)
			: 0;

		paintLiquidOrb(
			context,
			drop.x,
			drop.y,
			radius,
			hue + Math.sin(drop.phase + time * 0.2) * 5,
			blob.alpha * drop.alphaScale * (1.52 - influence * 0.08),
			1.24 + Math.sin(time * 0.16 + drop.phase) * 0.08 + Math.min(Math.abs(drop.vx) * 0.01, 0.18),
			0.92 + Math.cos(time * 0.14 + drop.phase) * 0.06,
		);
	});

	drawPointerWake(context, wake, shortestSide);
}

function drawPointerWake(context: CanvasRenderingContext2D, wake: WakePoint[], shortestSide: number) {
	if (wake.length === 0) return;

	context.globalCompositeOperation = 'destination-out';

	wake.forEach((point) => {
		const life = clamp(point.life);
		const sliceLength = shortestSide * (0.055 + Math.min(point.speed, 46) * 0.001);
		const sliceWidth = shortestSide * (0.01 + Math.min(point.speed, 42) * 0.00018);

		context.save();
		context.translate(point.x, point.y);
		context.rotate(point.angle);
		context.scale(1, 0.14);

		const gradient = context.createRadialGradient(0, 0, sliceWidth * 0.08, 0, 0, sliceLength);
		gradient.addColorStop(0, `rgba(0,0,0,${0.018 * life})`);
		gradient.addColorStop(0.44, `rgba(0,0,0,${0.009 * life})`);
		gradient.addColorStop(1, 'rgba(0,0,0,0)');
		context.fillStyle = gradient;
		context.beginPath();
		context.ellipse(0, 0, sliceLength, sliceWidth, 0, 0, Math.PI * 2);
		context.fill();
		context.restore();
	});

	context.globalCompositeOperation = 'source-over';

	wake.forEach((point) => {
		const life = clamp(point.life);
		const rimLength = shortestSide * (0.07 + Math.min(point.speed, 42) * 0.0012);
		const rimWidth = shortestSide * 0.008;

		context.save();
		context.translate(point.x, point.y);
		context.rotate(point.angle + Math.PI / 2);
		context.scale(1, 0.16);

		const gradient = context.createRadialGradient(0, 0, rimWidth, 0, 0, rimLength);
		gradient.addColorStop(0, `rgba(255,255,255,${0.006 * life})`);
		gradient.addColorStop(1, 'rgba(255,255,255,0)');
		context.fillStyle = gradient;
		context.beginPath();
		context.ellipse(0, 0, rimLength, rimWidth, 0, 0, Math.PI * 2);
		context.fill();
		context.restore();
	});
}

function createAmbientLiquidCanvas(canvas: HTMLCanvasElement, getState: () => AmbientInputState) {
	const context = canvas.getContext('2d', { alpha: true });
	if (!context) return null;

	let dimensions = resizeCanvas(canvas);
	let noisePattern = createNoisePattern(context);
	let frame: number | null = null;
	let lastPaint = 0;
	const easedPointer = { x: getState().pointerX, y: getState().pointerY };
	const lastPointer = { x: easedPointer.x, y: easedPointer.y };
	const wake: WakePoint[] = [];
	let drops = createLiquidDrops(dimensions.width, dimensions.height);
	const scrollParallax = { x: 0, y: 0 };
	const scrollParallaxTarget = { x: 0, y: 0 };
	const targetFrameMs = 1000 / 30;

	const paint = (timestamp: number) => {
		if (timestamp - lastPaint < targetFrameMs) {
			frame = window.requestAnimationFrame(paint);
			return;
		}

		lastPaint = timestamp;
		const state = getState();
		const scrollDepth = state.scrollY / Math.max(state.viewportHeight, 1);
		const maxScroll = Math.max(document.documentElement.scrollHeight - state.viewportHeight, 1);
		const scrollProgress = clamp(state.scrollY / maxScroll);
		const bottomLift = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);

		scrollParallaxTarget.x =
			Math.sin(scrollDepth * 0.86) * dimensions.width * 0.15 +
			Math.sin(scrollDepth * 0.31 + 1.3) * dimensions.width * 0.075;
		scrollParallaxTarget.y =
			Math.cos(scrollDepth * 0.42 + 0.4) * dimensions.height * 0.028 +
			Math.sin(scrollDepth * 0.16) * dimensions.height * 0.016;
		scrollParallax.x += (scrollParallaxTarget.x - scrollParallax.x) * 0.075;
		scrollParallax.y += (scrollParallaxTarget.y - scrollParallax.y) * 0.075;
		const renderState = {
			...state,
			bottomLift,
			parallaxX: scrollParallax.x,
			parallaxY: scrollParallax.y,
		};
		easedPointer.x += (state.pointerX - easedPointer.x) * 0.16;
		easedPointer.y += (state.pointerY - easedPointer.y) * 0.16;
		const velocityX = easedPointer.x - lastPointer.x;
		const velocityY = easedPointer.y - lastPointer.y;
		const speed = Math.hypot(velocityX, velocityY);

		if (state.supportsFinePointer && speed > 1.2) {
			wake.push({
				angle: Math.atan2(velocityY, velocityX),
				life: 1,
				speed,
				x: easedPointer.x,
				y: easedPointer.y,
			});
			if (wake.length > 12) wake.shift();
		}

		lastPointer.x = easedPointer.x;
		lastPointer.y = easedPointer.y;

		for (let index = wake.length - 1; index >= 0; index -= 1) {
			wake[index].life -= 0.055;
			if (wake[index].life <= 0) wake.splice(index, 1);
		}

		context.setTransform(dimensions.scale, 0, 0, dimensions.scale, 0, 0);
		context.clearRect(0, 0, dimensions.width, dimensions.height);
		updateLiquidDrops(
			drops,
			dimensions.width,
			dimensions.height,
			timestamp * 0.001,
			renderState,
			easedPointer,
			{ x: velocityX, y: velocityY },
		);
		drawLiquidBlobs(context, dimensions.width, dimensions.height, timestamp * 0.001, renderState, easedPointer, wake, drops);

		if (noisePattern) {
			context.globalCompositeOperation = 'overlay';
			context.globalAlpha = 0.06;
			context.fillStyle = noisePattern;
			context.fillRect(0, 0, dimensions.width, dimensions.height);
			context.globalAlpha = 1;
		}

		frame = window.requestAnimationFrame(paint);
	};

	return {
		resize() {
			dimensions = resizeCanvas(canvas);
			noisePattern = createNoisePattern(context);
			drops = createLiquidDrops(dimensions.width, dimensions.height);
		},
		start() {
			if (frame === null) frame = window.requestAnimationFrame(paint);
		},
	};
}

function drawStaticAmbientCanvas(canvas: HTMLCanvasElement) {
	const context = canvas.getContext('2d', { alpha: true });
	if (!context) return;

	const dimensions = resizeCanvas(canvas);
	const drops = createLiquidDrops(dimensions.width, dimensions.height);
	context.setTransform(dimensions.scale, 0, 0, dimensions.scale, 0, 0);
	context.clearRect(0, 0, dimensions.width, dimensions.height);
	updateLiquidDrops(
		drops,
		dimensions.width,
		dimensions.height,
		0,
		{
			bottomLift: 0,
			parallaxX: 0,
			parallaxY: 0,
			pointerX: dimensions.width / 2,
			pointerY: dimensions.height * 0.38,
			scrollY: 0,
			supportsFinePointer: false,
			viewportHeight: dimensions.height,
			viewportWidth: dimensions.width,
		},
		{ x: dimensions.width / 2, y: dimensions.height * 0.38 },
		{ x: 0, y: 0 },
	);
	drawLiquidBlobs(
		context,
		dimensions.width,
		dimensions.height,
		0,
		{
			bottomLift: 0,
			parallaxX: 0,
			parallaxY: 0,
			pointerX: dimensions.width / 2,
			pointerY: dimensions.height * 0.38,
			scrollY: 0,
			supportsFinePointer: false,
			viewportHeight: dimensions.height,
			viewportWidth: dimensions.width,
		},
		{ x: dimensions.width / 2, y: dimensions.height * 0.38 },
		[],
		drops,
	);
}
