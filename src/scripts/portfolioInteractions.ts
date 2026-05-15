const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
const ambientBackground = document.querySelector<HTMLElement>('[data-ambient-background]');

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

const ambientVars = new Map<string, string>();
const setAmbientVar = (name: string, value: string) => {
	if (!ambientBackground || ambientVars.get(name) === value) return;

	ambientBackground.style.setProperty(name, value);
	ambientVars.set(name, value);
};

setAmbientVar('--pointer-drift-x', '0px');
setAmbientVar('--pointer-drift-y', '0px');
setAmbientVar('--pointer-angle', '0deg');
setAmbientVar('--bg-shift', '0px');
setAmbientVar('--bg-pan-x', '0px');
setAmbientVar('--bg-pan-y', '0px');
setAmbientVar('--bg-radial-shift', '0px');

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
	let pointerX = window.innerWidth / 2;
	let pointerY = window.innerHeight * 0.38;
	let scrollY = window.scrollY;
	let viewportWidth = Math.max(window.innerWidth, 1);
	let viewportHeight = Math.max(window.innerHeight, 1);
	let backgroundFrame: number | null = null;
	let pointerDirty = supportsFinePointer;
	let scrollDirty = true;

	const px = (value: number) => `${Math.round(value * 2) / 2}px`;
	const deg = (value: number) => `${Math.round(value * 10) / 10}deg`;

	const updatePointerVars = () => {
		const driftX = ((pointerX / viewportWidth) - 0.5) * 168;
		const driftY = ((pointerY / viewportHeight) - 0.5) * 126;
		const angle = ((pointerX / viewportWidth) - 0.5) * 22;

		setAmbientVar('--pointer-drift-x', px(driftX));
		setAmbientVar('--pointer-drift-y', px(driftY));
		setAmbientVar('--pointer-angle', deg(angle));
	};

	const updateScrollVars = () => {
		const shift = Math.min(scrollY * 0.28, 180);
		const panX = Math.sin(scrollY / 430) * 132;
		const panY = Math.min(scrollY * 0.1, 150);
		const radialShift = Math.cos(scrollY / 360) * 118;

		setAmbientVar('--bg-shift', px(shift));
		setAmbientVar('--bg-pan-x', px(panX));
		setAmbientVar('--bg-pan-y', px(panY));
		setAmbientVar('--bg-radial-shift', px(radialShift));
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
			scheduleBackgroundUpdate();
		},
		{ passive: true },
	);

	window.addEventListener(
		'scroll',
		() => {
			scrollY = window.scrollY;
			scrollDirty = true;
			scheduleBackgroundUpdate();
		},
		{ passive: true },
	);

	scheduleBackgroundUpdate();
}
