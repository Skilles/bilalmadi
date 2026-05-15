import type { SocialLink } from '../../data/portfolio';
import { focusRing, monoLabel } from './styles';

type HeroProps = {
	avatarHeight: number;
	avatarUrl: string;
	avatarWidth: number;
	company: string;
	location: string;
	name: string;
	socialLinks: SocialLink[];
	title: string;
};

const heroLetterClass =
	'inline-block origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.09] motion-reduce:transition-none';
const gradientHeroLetterClass = `${heroLetterClass} bg-gradient-to-r from-acid via-aqua to-rose bg-clip-text text-transparent`;

function renderNameLetters(value: string, className = heroLetterClass) {
	return Array.from(value).map((letter, index) => (
		<span className={className} key={`${letter}-${index}`}>
			{letter}
		</span>
	));
}

function renderGradientNameLetters(value: string) {
	const letters = Array.from(value);
	const backgroundSize = `${letters.length * 100}% 100%`;

	return letters.map((letter, index) => (
		<span
			className={gradientHeroLetterClass}
			key={`${letter}-${index}`}
			style={{
				backgroundPosition: `${letters.length > 1 ? (index / (letters.length - 1)) * 100 : 0}% 0`,
				backgroundSize,
			}}
		>
			{letter}
		</span>
	));
}

export function Hero({ avatarHeight, avatarUrl, avatarWidth, company, location, name, socialLinks, title }: HeroProps) {
	const [firstName, lastName] = name.split(' ');

	return (
		<section className="relative z-10 flex min-h-screen items-center px-5 py-15 md:px-10 md:py-20 md:pb-25">
			<div className="mx-auto grid w-full max-w-[1240px] grid-cols-[minmax(0,1fr)_clamp(9rem,34vw,11rem)] items-center gap-x-6 gap-y-10 min-[420px]:gap-x-8 md:grid-cols-[1fr_auto] md:gap-20">
				<div className="min-w-0">
					<p className={`${monoLabel} mb-7 text-dim flex items-center gap-2 hover:text-paper transition`}><span className="mx-0.5 text-white/7">/</span>{location}</p>
					<h1
						aria-label={name}
						className="text-[clamp(52px,13vw,72px)] font-medium leading-[0.92] tracking-[-0.045em] drop-shadow-lg md:mb-10 md:text-[clamp(64px,10vw,144px)]"
					>
						<span aria-hidden="true" className="block">{renderNameLetters(firstName)}</span>
						<span aria-hidden="true" className="block">
							{renderGradientNameLetters(lastName)}
						</span>
					</h1>

					<div className="hidden md:block">
						<HeroActions company={company} socialLinks={socialLinks} title={title} />
					</div>
				</div>

				<div className="hero-avatar-frame relative w-full justify-self-end overflow-hidden rounded bg-[#050505] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none aspect-[3/4] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_28%_38%,#00e5ff_0%,transparent_32%),radial-gradient(circle_at_72%_32%,#ffea00_0%,transparent_30%),radial-gradient(circle_at_50%_72%,#ff1744_0%,transparent_38%),radial-gradient(circle_at_82%_78%,#00ff9c_0%,transparent_32%),linear-gradient(135deg,#1a0530,#2a0510_60%,#050a20)] before:blur-[28px] before:saturate-[1.2] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.45)_100%),radial-gradient(circle_at_50%_40%,transparent_30%,rgba(0,0,0,0.3)_80%)] md:w-80">
					<img
						alt={name}
						className="relative z-10 size-full object-cover"
						decoding="async"
						fetchPriority="high"
						height={avatarHeight}
						src={avatarUrl}
						width={avatarWidth}
					/>
				</div>

				<div className="col-span-2 md:hidden">
					<HeroActions company={company} socialLinks={socialLinks} title={title} />
				</div>
			</div>
		</section>
	);
}

function HeroActions({ company, socialLinks, title }: Pick<HeroProps, 'company' | 'socialLinks' | 'title'>) {
	return (
		<>
			<p className="mb-11 max-w-[520px] text-[22px] leading-[1.45] tracking-[-0.01em] text-paper">
				<span className="text-acid">{title}</span> <span className="text-muted">at {company}.</span>
			</p>

			<nav aria-label="Primary links" className="flex flex-wrap gap-2.5">
				{socialLinks.map(({ label, href, icon: Icon }) => (
					<a
						className={`${focusRing} inline-flex items-center gap-2 rounded-full border border-white/7 bg-white/[0.015] px-[18px] py-[11px] font-mono text-[11.5px] tracking-[0.06em] text-paper no-underline backdrop-blur-sm transition duration-250 hover:-translate-y-px hover:border-white/15 hover:bg-white/5`}
						href={href}
						key={label}
						rel={href.startsWith('http') || href.endsWith('.pdf') ? 'noreferrer' : undefined}
						target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
					>
						<Icon aria-hidden="true" className="size-[13px] opacity-90" />
						{label}
					</a>
				))}
			</nav>
		</>
	);
}
