import {
	ArrowUpRight,
	BriefcaseBusiness,
	Code2,
	Contact,
	GitBranch,
	GraduationCap,
	Mail,
	MapPin,
	Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

const links = [
	{ label: 'Email', href: 'mailto:bilal@bilalmadi.com', icon: Mail },
	{ label: 'GitHub', href: 'https://github.com/Skilles', icon: GitBranch },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/bilal-madi', icon: Contact },
];

const experience = [
	{
		role: 'Software Engineer II',
		org: 'WebstaurantStore',
		when: 'Dec 2025 - Present',
		description:
			'Building production software for a high-volume commerce platform with a focus on maintainable systems and practical tradeoffs.',
		icon: BriefcaseBusiness,
	},
	{
		role: 'Software Engineer',
		org: 'WebstaurantStore',
		when: '2022 - 2025',
		description:
			'Progressed through junior and mid-level engineering roles while contributing to business-critical web systems.',
		icon: Code2,
	},
	{
		role: 'B.S. Computer Science',
		org: 'University of Georgia',
		when: '2019 - 2023',
		description: 'Studied computer science while building projects across games, AI, course tooling, graphics, and web apps.',
		icon: GraduationCap,
	},
	{
		role: 'Co-Founder',
		org: 'airSAFE Diagnostics',
		when: '2017 - 2019',
		description: 'Developed and pitched a portable air sensor that detected high CO2 and VOC levels.',
		icon: Sparkles,
	},
];

const featuredProjects = [
	{
		name: 'MobMincer',
		type: 'Minecraft mod',
		href: 'https://github.com/Skilles/MobMincer',
		accent: 'mint',
		description:
			'A Fabric and Forge mod that adds a configurable mid-game alternative to mob farms with attachments, enchantments, and mod compatibility.',
		stack: ['Kotlin', 'Minecraft', 'Architectury'],
	},
	{
		name: 'Craftonauts',
		type: 'AI mod experiment',
		href: 'https://github.com/Skilles/Craftonauts',
		accent: 'cyan',
		description:
			'A Minecraft mod that lets players generate new blocks and items through LLM-powered recipes backed by provider or local Ollama configuration.',
		stack: ['LLMs', 'Fabric', 'Tooling'],
	},
	{
		name: 'SpokenWord',
		type: 'Game utility',
		href: 'https://github.com/Skilles/SpokenWord',
		accent: 'amber',
		description:
			'A published Minecraft mod with CurseForge and Modrinth distribution, documentation, and multi-loader support.',
		stack: ['Java', 'Fabric', 'Forge'],
	},
	{
		name: 'Blackjack-AI',
		type: 'AI simulation',
		href: 'https://github.com/Skilles/Blackjack-AI',
		accent: 'red',
		description:
			'A blackjack trainer using NEAT-generated neural networks to evolve strategy against the house and compare outcomes with known optimal play.',
		stack: ['Python', 'NEAT', 'Pygame'],
	},
	{
		name: 'Minerva-UGA',
		type: 'Campus tooling',
		href: 'https://github.com/Skilles/Minerva-UGA',
		accent: 'steel',
		description:
			'A course registration helper for UGA Athena exploring schedule import, course search, route planning, and student workflow automation.',
		stack: ['Web tooling', 'Automation', 'UX'],
	},
	{
		name: 'LeagueAnalyzer',
		type: 'Realtime tool',
		accent: 'lime',
		description:
			'A real-time game analysis tool framed here at product level only: desktop/web UI, strict TypeScript work, and live decision-support modeling.',
		stack: ['TypeScript', 'React', 'Realtime'],
	},
];

const accentClass: Record<string, string> = {
	amber: 'border-amber-200/30 text-amber-100',
	cyan: 'border-cyan-200/30 text-cyan-100',
	lime: 'border-lime-200/30 text-lime-100',
	mint: 'border-emerald-200/30 text-emerald-100',
	red: 'border-red-200/30 text-red-100',
	steel: 'border-slate-200/30 text-slate-100',
};

function ExternalAnchor({
	href,
	children,
	label,
}: {
	href: string;
	children: ReactNode;
	label: string;
}) {
	return (
		<a
			aria-label={label}
			className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-white/82 backdrop-blur-xl transition hover:border-cyan-100/35 hover:bg-white/[0.075] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
			href={href}
			rel="noreferrer"
			target={href.startsWith('http') ? '_blank' : undefined}
		>
			{children}
		</a>
	);
}

export default function Portfolio() {
	return (
		<>
			<div className="site-texture" aria-hidden="true" />
			<header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#07090c]/78 backdrop-blur-2xl">
				<nav
					aria-label="Primary navigation"
					className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
				>
					<a className="text-sm font-semibold tracking-[0.18em] text-white/88 uppercase" href="#top">
						Bilal Madi
					</a>
					<div className="flex items-center gap-1 text-sm text-white/62">
						<a className="nav-link" href="#work">
							Work
						</a>
						<a className="nav-link" href="#projects">
							Projects
						</a>
						<a className="nav-link" href="#contact">
							Contact
						</a>
					</div>
				</nav>
			</header>

			<main id="top">
				<section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[calc(100vh-4.25rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.52fr)] lg:py-24">
					<div className="max-w-3xl">
						<div className="mb-7 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-cyan-100/78 uppercase">
							<MapPin className="size-4" aria-hidden="true" />
							Atlanta, Georgia
						</div>
						<h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
							Bilal Madi
						</h1>
						<p className="mt-5 text-xl leading-8 text-white/72 sm:text-2xl">
							Software Engineer II at WebstaurantStore.
						</p>
						<p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
							I build production web software and side projects across AI tools, game systems, automation,
							and developer-focused interfaces.
						</p>
						<div className="mt-9 flex flex-wrap gap-3">
							{links.map(({ label, href, icon: Icon }) => (
								<ExternalAnchor href={href} label={`Open ${label}`} key={label}>
									<Icon className="size-4" aria-hidden="true" />
									<span>{label}</span>
								</ExternalAnchor>
							))}
						</div>
					</div>

					<aside aria-label="Headshot" className="hero-photo">
						<img
							alt="Bilal Madi"
							className="h-full w-full object-cover"
							src="https://avatars.githubusercontent.com/u/15331633?v=4"
						/>
					</aside>
				</section>

				<section id="work" className="section-shell">
					<div className="section-heading">
						<p>Experience</p>
						<h2>Work and background</h2>
					</div>
					<div className="grid gap-4 lg:grid-cols-4">
						{experience.map(({ role, org, when, description, icon: Icon }) => (
							<article className="glass-panel" key={`${role}-${org}`}>
								<div className="mb-8 flex items-start justify-between gap-4">
									<Icon className="size-5 text-cyan-100/72" aria-hidden="true" />
									<span className="text-right text-xs font-semibold tracking-[0.14em] text-white/38 uppercase">
										{when}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white">{role}</h3>
								<p className="mt-2 text-sm font-semibold text-amber-100/75">{org}</p>
								<p className="mt-5 text-sm leading-6 text-white/58">{description}</p>
							</article>
						))}
					</div>
				</section>

				<section id="projects" className="section-shell">
					<div className="section-heading">
						<p>Projects</p>
						<h2>Featured work</h2>
					</div>
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{featuredProjects.map((project) => (
							<article className="project-card liquid-glass" key={project.name}>
								<div className="flex items-start justify-between gap-4">
									<div>
										<p className={`project-status ${accentClass[project.accent]}`}>{project.type}</p>
										<h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
									</div>
									{project.href ? (
										<a
											aria-label={`Open ${project.name} on GitHub`}
											className="icon-link"
											href={project.href}
											rel="noreferrer"
											target="_blank"
										>
											<ArrowUpRight className="size-4" aria-hidden="true" />
										</a>
									) : (
										<span className="icon-link text-white/28">
											<Code2 className="size-4" aria-hidden="true" />
										</span>
									)}
								</div>
								<p className="mt-6 min-h-28 text-sm leading-6 text-white/62">{project.description}</p>
								<div className="mt-7 flex flex-wrap gap-2">
									{project.stack.map((item) => (
										<span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-white/56" key={item}>
											{item}
										</span>
									))}
								</div>
							</article>
						))}
					</div>

					<div className="mt-10 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5 backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
						<p className="max-w-2xl text-sm leading-6 text-white/56">
							This is a curated set. Most of my project archive lives on GitHub, including smaller experiments,
							older games, utilities, and prototypes.
						</p>
						<a
							className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-white/78 transition hover:border-cyan-100/35 hover:bg-white/[0.075] hover:text-white"
							href="https://github.com/Skilles"
							rel="noreferrer"
							target="_blank"
						>
							View all projects
							<ArrowUpRight className="size-4" aria-hidden="true" />
						</a>
					</div>
				</section>

				<section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
					<div className="contact-band liquid-glass">
						<div>
							<p className="text-xs font-semibold tracking-[0.18em] text-cyan-100/72 uppercase">Contact</p>
							<h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Get in touch</h2>
							<p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
								Reach out for engineering roles, project feedback, or collaboration around AI-assisted tools
								and software craft.
							</p>
						</div>
						<div className="flex flex-wrap gap-3 lg:justify-end">
							{links.map(({ label, href, icon: Icon }) => (
								<ExternalAnchor href={href} label={`Contact via ${label}`} key={label}>
									<Icon className="size-4" aria-hidden="true" />
									<span>{label}</span>
								</ExternalAnchor>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-white/[0.08] px-5 py-8 text-center text-xs tracking-[0.14em] text-white/36 uppercase sm:px-8">
				<span>Bilal Madi</span>
				<span className="mx-3 text-white/18">/</span>
				<span>Static portfolio on Cloudflare Workers</span>
			</footer>
		</>
	);
}
