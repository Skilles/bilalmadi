import type { SocialLink } from '../../data/portfolio';
import { focusRing, monoLabel } from './styles';

type HeroProps = {
	avatarUrl: string;
	company: string;
	intro: string;
	location: string;
	name: string;
	socialLinks: SocialLink[];
	title: string;
};

export function Hero({ avatarUrl, company, intro, location, name, socialLinks, title }: HeroProps) {
	const [firstName, lastName] = name.split(' ');

	return (
		<section className="relative z-10 flex min-h-screen items-center px-5 py-15 md:px-10 md:py-20 md:pb-25">
			<div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 md:grid-cols-[1fr_auto] md:gap-20">
				<div>
					<p className={`${monoLabel} mb-7 text-dim flex items-center gap-2 hover:text-paper transition`}><span className="mx-0.5 text-line">/</span>{location}</p>
					<h1 className="mb-10 text-[clamp(64px,10vw,144px)] font-medium leading-[0.92] tracking-[-0.045em]">
						{firstName}
						<br />
						<span className="bg-gradient-to-r from-paper via-aqua to-rose bg-clip-text text-transparent">{lastName}</span>
					</h1>
					<p className="mb-11 max-w-[520px] text-[22px] leading-[1.45] tracking-[-0.01em] text-paper">
						<span className="text-acid">{title}</span> <span className="text-muted">at {company}.</span>
					</p>
					
					<nav aria-label="Primary links" className="flex flex-wrap gap-2.5">
						{socialLinks.map(({ label, href, icon: Icon }) => (
							<a
								className={`${focusRing} inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/[0.015] px-[18px] py-[11px] font-mono text-[11.5px] tracking-[0.06em] text-paper no-underline backdrop-blur-sm transition duration-250 hover:-translate-y-px hover:border-white/15 hover:bg-white/5`}
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
				</div>

				<div className="relative order-first w-40 overflow-hidden rounded bg-[#050505] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/6 aspect-[3/4] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_28%_38%,#00e5ff_0%,transparent_32%),radial-gradient(circle_at_72%_32%,#ffea00_0%,transparent_30%),radial-gradient(circle_at_50%_72%,#ff1744_0%,transparent_38%),radial-gradient(circle_at_82%_78%,#00ff9c_0%,transparent_32%),linear-gradient(135deg,#1a0530,#2a0510_60%,#050a20)] before:blur-[28px] before:saturate-[1.2] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.45)_100%),radial-gradient(circle_at_50%_40%,transparent_30%,rgba(0,0,0,0.3)_80%)] md:order-none md:w-80">
					<img alt={name} className="relative z-10 size-full object-cover" src={avatarUrl} fetchPriority="high" />
				</div>
			</div>
		</section>
	);
}
