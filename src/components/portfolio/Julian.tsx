import julianImage from '../../assets/julian_lap.jpg';
import { monoLabel, reveal, sectionShell, container } from './styles';
import { SectionHeader } from './SectionHeader';

export function Julian() {
	return (
		<section className={sectionShell} id="julian">
			<div className={container}>
				<SectionHeader title="Cat" />

				<div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-12 lg:gap-16">
					<div
						className={`${reveal} group relative w-full max-w-[460px]`}
						data-reveal
					>
						<JulianImageMask />
					</div>

					<div className={`${reveal} max-w-[620px] md:pt-16 lg:pt-20`} data-reveal>
						<p className={`${monoLabel} mb-5 text-acid`}>My code reviewer</p>
						<h2 className="mb-6 text-[clamp(34px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.045em] text-paper">
							Julian
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

function JulianImageMask() {
	return (
		<svg
			aria-label="Julian sitting on Bilal's lap"
			className="block aspect-[4/5] w-full [filter:drop-shadow(0_30px_70px_rgba(0,0,0,0.58))] transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
			preserveAspectRatio="xMidYMid slice"
			role="img"
			viewBox="0 0 900 1125"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="julian-organic-edge" x="-20%" y="-20%" width="140%" height="140%">
					<feTurbulence baseFrequency="0.012 0.018" numOctaves="4" result="noise" seed="7" type="fractalNoise" />
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G" />
					<feGaussianBlur stdDeviation="28" />
				</filter>

				<filter id="julian-soft-cutout" x="-18%" y="-18%" width="136%" height="136%">
					<feGaussianBlur stdDeviation="26" />
				</filter>

				<radialGradient id="julian-fade-core" cx="43%" cy="46%" r="62%">
					<stop offset="0%" stopColor="white" stopOpacity="1" />
					<stop offset="48%" stopColor="white" stopOpacity="0.98" />
					<stop offset="68%" stopColor="white" stopOpacity="0.72" />
					<stop offset="86%" stopColor="white" stopOpacity="0.26" />
					<stop offset="100%" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<radialGradient id="julian-face-hold" cx="34%" cy="25%" r="24%">
					<stop offset="0%" stopColor="white" stopOpacity="1" />
					<stop offset="58%" stopColor="white" stopOpacity="0.92" />
					<stop offset="100%" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="julian-mask-right-edge-cut" gradientUnits="userSpaceOnUse" x1="900" x2="756" y1="0" y2="0">
					<stop offset="0%" stopColor="black" stopOpacity="1" />
					<stop offset="34%" stopColor="black" stopOpacity="0.86" />
					<stop offset="72%" stopColor="black" stopOpacity="0.28" />
					<stop offset="100%" stopColor="black" stopOpacity="0" />
				</linearGradient>

				<linearGradient id="julian-mask-left-edge-cut" gradientUnits="userSpaceOnUse" x1="0" x2="148" y1="0" y2="0">
					<stop offset="0%" stopColor="black" stopOpacity="1" />
					<stop offset="38%" stopColor="black" stopOpacity="0.82" />
					<stop offset="76%" stopColor="black" stopOpacity="0.24" />
					<stop offset="100%" stopColor="black" stopOpacity="0" />
				</linearGradient>

				<mask id="julian-organic-mask" maskUnits="userSpaceOnUse">
					<rect fill="black" height="1125" width="900" />

					<g filter="url(#julian-organic-edge)">
						<path
							d="
								M 64 140
								C 136 62, 288 36, 420 68
								C 530 94, 628 88, 724 54
								C 842 12, 892 78, 832 204
								C 790 292, 796 374, 870 506
								C 934 620, 894 820, 768 940
								C 608 1020, 398 1044, 262 942
								C 136 848, 118 718, 94 578
								C 72 450, 8 340, 20 242
								C 26 192, 42 160, 64 140
							"
							fill="url(#julian-fade-core)"
						/>
						<ellipse cx="312" cy="255" fill="url(#julian-face-hold)" rx="220" ry="170" />
						<ellipse cx="145" cy="278" fill="white" opacity="0.86" rx="112" ry="178" />
						<ellipse cx="768" cy="186" fill="white" opacity="1" rx="154" ry="250" />
						<ellipse cx="710" cy="748" fill="white" opacity="0.64" rx="180" ry="320" />
					</g>

					<g filter="url(#julian-soft-cutout)" opacity="1">
						<path
							d="
								M 0 260
								C 92 328, 170 430, 238 560
								C 316 706, 348 884, 486 1125
								L 0 1125
								Z
							"
							fill="black"
						/>
						<path
							d="
								M 398 0
								C 430 96, 484 164, 554 184
								C 612 200, 666 158, 724 72
								L 766 0
								L 900 0
								L 900 92
								C 780 92, 724 218, 610 256
								C 502 292, 414 220, 364 112
								L 324 0
								Z
							"
							fill="black"
							opacity="0.78"
						/>
						<path
							d="
								M 844 0
								L 900 0
								L 900 610
								C 848 576, 806 520, 796 430
								C 784 320, 812 200, 844 0
								Z
							"
							fill="black"
							opacity="0.96"
						/>
					</g>

					<rect fill="url(#julian-mask-left-edge-cut)" height="1125" width="900" />
					<rect fill="url(#julian-mask-right-edge-cut)" height="1125" width="900" />
				</mask>

				<radialGradient id="julian-natural-vignette" cx="42%" cy="44%" r="70%">
					<stop offset="0%" stopColor="transparent" />
					<stop offset="58%" stopColor="transparent" />
					<stop offset="100%" stopColor="rgba(10,10,10,0.66)" />
				</radialGradient>

				<radialGradient id="julian-shirt-shadow" cx="16%" cy="72%" r="42%">
					<stop offset="0%" stopColor="rgba(10,10,10,0.78)" />
					<stop offset="48%" stopColor="rgba(10,10,10,0.56)" />
					<stop offset="100%" stopColor="transparent" />
				</radialGradient>

			</defs>

			<image
				filter="brightness(1.03) contrast(1.08) saturate(1.02)"
				height="1125"
				href={julianImage.src}
				mask="url(#julian-organic-mask)"
				preserveAspectRatio="xMidYMid slice"
				width="900"
				x="0"
				y="0"
			/>
			<rect fill="url(#julian-shirt-shadow)" height="1125" mask="url(#julian-organic-mask)" width="900" />
			<rect fill="url(#julian-natural-vignette)" height="1125" mask="url(#julian-organic-mask)" width="900" />
		</svg>
	);
}
