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
			<div className="absolute inset-0 animate-ambient-hue">
				<div
					className="absolute left-1/2 top-[-500px] h-[1320px] w-[1900px] -translate-x-1/2 translate-y-[calc(var(--bg-shift,0px)*-0.72+var(--bg-pan-y,0px)*-0.12)] bg-[radial-gradient(ellipse_56%_64%_at_calc(19%+var(--pointer-drift-x,0px)*1.25+var(--bg-pan-x,0px)*0.24)_calc(43%+var(--pointer-drift-y,0px)*1.05+var(--bg-shift,0px)*-0.1+var(--bg-radial-shift,0px)*-0.11),color-mix(in_oklab,var(--color-aqua)_15%,transparent)_0%,color-mix(in_oklab,var(--color-aqua)_6%,transparent)_42%,transparent_78%),radial-gradient(ellipse_52%_62%_at_calc(79%+var(--pointer-drift-x,0px)*-1.08+var(--bg-pan-x,0px)*-0.2)_calc(34%+var(--pointer-drift-y,0px)*-0.9+var(--bg-shift,0px)*0.08+var(--bg-radial-shift,0px)*0.09),color-mix(in_oklab,var(--color-rose)_12%,transparent)_0%,color-mix(in_oklab,var(--color-rose)_5%,transparent)_44%,transparent_80%),radial-gradient(ellipse_48%_58%_at_calc(55%+var(--pointer-drift-x,0px)*0.58+var(--bg-pan-x,0px)*0.16)_calc(69%+var(--pointer-drift-y,0px)*0.7+var(--bg-shift,0px)*-0.12+var(--bg-radial-shift,0px)*-0.12),color-mix(in_oklab,var(--color-violet)_9%,transparent)_0%,color-mix(in_oklab,var(--color-violet)_4%,transparent)_46%,transparent_82%),radial-gradient(ellipse_44%_50%_at_calc(42%+var(--pointer-drift-x,0px)*-0.42+var(--bg-pan-x,0px)*-0.12)_calc(57%+var(--pointer-drift-y,0px)*0.52+var(--bg-shift,0px)*0.1+var(--bg-radial-shift,0px)*0.11),color-mix(in_oklab,var(--color-acid)_7%,transparent)_0%,color-mix(in_oklab,var(--color-acid)_3%,transparent)_45%,transparent_84%)] opacity-90 blur-[70px] transition-transform duration-300"
				/>
				<div
					className="absolute inset-[-120px] translate-x-[calc(var(--pointer-drift-x,0px)*0.72+var(--bg-pan-x,0px)*0.7)] translate-y-[calc(var(--bg-shift,0px)*-0.52+var(--pointer-drift-y,0px)*0.5+var(--bg-pan-y,0px)*-0.18)] bg-[linear-gradient(calc(112deg+var(--pointer-angle,0deg)),transparent_0%,color-mix(in_oklab,var(--color-aqua)_4%,transparent)_18%,color-mix(in_oklab,var(--color-violet)_5%,transparent)_38%,transparent_60%,color-mix(in_oklab,var(--color-rose)_4%,transparent)_78%,transparent_100%)] opacity-75 blur-[56px] transition-transform duration-300"
				/>
				<div
					className="absolute inset-[-160px] translate-x-[calc(var(--pointer-drift-x,0px)*-0.4+var(--bg-pan-x,0px)*-0.58)] translate-y-[calc(var(--bg-shift,0px)*0.36+var(--pointer-drift-y,0px)*-0.32+var(--bg-pan-y,0px)*0.2)] bg-[radial-gradient(ellipse_62%_34%_at_calc(50%+var(--pointer-drift-x,0px)*0.18+var(--bg-pan-x,0px)*0.12)_calc(22%+var(--pointer-drift-y,0px)*-0.12+var(--bg-shift,0px)*-0.18+var(--bg-radial-shift,0px)*-0.14),color-mix(in_oklab,var(--color-acid)_5%,transparent)_0%,color-mix(in_oklab,var(--color-acid)_2%,transparent)_38%,transparent_76%),radial-gradient(ellipse_70%_38%_at_calc(58%+var(--pointer-drift-x,0px)*-0.14+var(--bg-pan-x,0px)*-0.1)_calc(78%+var(--pointer-drift-y,0px)*0.16+var(--bg-shift,0px)*0.16+var(--bg-radial-shift,0px)*0.16),color-mix(in_oklab,var(--color-aqua)_5%,transparent)_0%,color-mix(in_oklab,var(--color-aqua)_2%,transparent)_40%,transparent_78%)] opacity-80 blur-[60px] transition-transform duration-300"
				/>
			</div>
			<div
				className="absolute inset-0 bg-ambient-grain opacity-[0.105] mix-blend-overlay contrast-150"
			/>
			<div
				className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.54)_72%,rgba(10,10,10,0.88))]"
			/>
		</div>
	);
}
