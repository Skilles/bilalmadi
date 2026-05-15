export function AmbientBackground() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
			data-ambient-background
		>
			<div
				className="absolute inset-[-140px] translate-x-[calc(var(--pointer-drift-x,0px)*-0.5)] translate-y-[calc(var(--bg-shift,0px)*-0.72+var(--pointer-drift-y,0px)*-0.22)] bg-[radial-gradient(circle,rgba(255,255,255,0.085)_1px,transparent_1.15px)] bg-[length:27px_27px] opacity-95 [mask-image:radial-gradient(ellipse_1180px_780px_at_50%_0%,black_0%,transparent_80%)]"
			/>
			<canvas className="absolute inset-0 size-full opacity-95" data-ambient-canvas />
			<div
				className="absolute inset-0 bg-ambient-grain opacity-[0.105] mix-blend-overlay contrast-150"
			/>
			<div
				className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.54)_72%,rgba(10,10,10,0.88))]"
			/>
		</div>
	);
}
