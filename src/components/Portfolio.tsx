import { ArrowUpRight, Contact, GitBranch, Mail } from 'lucide-react';

const links = [
	{ label: 'Email', href: 'mailto:hello@bilalmadi.com', icon: Mail },
	{ label: 'GitHub', href: 'https://github.com/Skilles', icon: GitBranch },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/bilal-madi', icon: Contact },
];

const experience = [
	{
		role: 'Software Engineer II',
		org: 'WebstaurantStore',
		when: 'DEC 2025 - NOW',
		description:
			'Building production software for a high-volume commerce platform with a focus on maintainable systems and practical tradeoffs.',
	},
	{
		role: 'Software Engineer',
		org: 'WebstaurantStore',
		when: '2022 - 2025',
		description:
			'Progressed through junior and mid-level engineering roles while contributing to business-critical web systems.',
	},
	{
		role: 'B.S. Computer Science',
		org: 'University of Georgia',
		when: '2019 - 2023',
		description: 'Studied computer science while building projects across games, AI, course tooling, graphics, and web apps.',
	},
	{
		role: 'Co-Founder',
		org: 'airSAFE Diagnostics',
		when: '2017 - 2019',
		description: 'Developed and pitched a portable air sensor that detected high CO2 and VOC levels.',
	},
];

const featuredProjects = [
	{
		name: 'MobMincer',
		type: 'Minecraft Mod',
		href: 'https://github.com/Skilles/MobMincer',
		description:
			'A Fabric and Forge mod that adds a configurable mid-game alternative to mob farms with attachments, enchantments, and mod compatibility.',
		stack: ['Kotlin', 'Minecraft', 'Architecture'],
	},
	{
		name: 'Craftonauts',
		type: 'AI Mod Experiment',
		href: 'https://github.com/Skilles/Craftonauts',
		description:
			'A Minecraft mod that lets players generate new blocks and items through LLM-powered recipes backed by provider or local Ollama configuration.',
		stack: ['LLMs', 'Fabric', 'Tooling'],
	},
	{
		name: 'SpokenWord',
		type: 'Game Utility',
		href: 'https://github.com/Skilles/SpokenWord',
		description:
			'A published Minecraft mod with CurseForge and Modrinth distribution, documentation, and multi-loader support.',
		stack: ['Java', 'Fabric', 'Forge'],
	},
	{
		name: 'Blackjack-AI',
		type: 'AI Simulation',
		href: 'https://github.com/Skilles/Blackjack-AI',
		description:
			'A blackjack trainer using NEAT-generated neural networks to evolve strategy against the house and compare outcomes with known optimal play.',
		stack: ['Python', 'NEAT', 'Pygame'],
	},
	{
		name: 'Minerva-UGA',
		type: 'Campus Tooling',
		href: 'https://github.com/Skilles/Minerva-UGA',
		description:
			'A course registration helper for UGA Athena exploring schedule import, course search, route planning, and student workflow automation.',
		stack: ['Web tooling', 'Automation', 'UX'],
	},
	{
		name: 'LeagueAnalyzer',
		type: 'Realtime Tool',
		href: 'https://github.com/Skilles',
		description:
			'A real-time game analysis tool framed here at product level only: desktop/web UI, strict TypeScript work, and live decision-support modeling.',
		stack: ['TypeScript', 'React', 'Realtime'],
	},
];

function SectionHead({ number, title }: { number: string; title: string; }) {
	return (
		<div className="section-head">
			<div className="section-title">
				<span className="num">{number}</span>
				<span className="slash">/</span>
				{title}
			</div>
		</div>
	);
}

export default function Portfolio() {
	return (
		<>
			<div className="bg-dots" aria-hidden="true" />
			<div className="bg-glow" aria-hidden="true" />

			<main>
				<section className="hero">
					<div className="hero-inner">
						<div>
							<div className="hero-meta">
								<span>Atlanta, GA · UTC-5</span>
							</div>
							<h1>
								Bilal
								<br />
								Madi
							</h1>
							<p className="hero-sub">
								Software Engineer <span>at WebstaurantStore.</span>
							</p>
							<p className="hero-desc">
								Building production web software and side projects across AI tools, game systems, automation,
								and developer-focused interfaces.
							</p>
							<div className="btn-group" aria-label="Primary links">
								{links.map(({ label, href, icon: Icon }) => (
									<a
										className="btn"
										href={href}
										key={label}
										rel={href.startsWith('http') ? 'noreferrer' : undefined}
										target={href.startsWith('http') ? '_blank' : undefined}
									>
										<Icon aria-hidden="true" />
										{label}
									</a>
								))}
							</div>
						</div>

						<div className="portrait-frame">
							<img alt="Bilal Madi" src="https://avatars.githubusercontent.com/u/15331633?v=4" />
						</div>
					</div>
				</section>

				<section id="experience">
					<div className="section-inner">
						<SectionHead number="01" title="Experience" />

						<div className="timeline">
							{experience.map((item) => (
								<article className="tl-item" key={`${item.role}-${item.org}`}>
									<div className="tl-year">
										<span className="marker" />
										{item.when}
									</div>
									<h2 className="tl-role">{item.role}</h2>
									<div className="tl-company">{item.org}</div>
									<p className="tl-desc">{item.description}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="projects">
					<div className="section-inner">
						<SectionHead number="02" title="Selected Projects" />

						<div className="projects">
							{featuredProjects.map((project) => (
								<a className="project" href={project.href} key={project.name} rel="noreferrer" target="_blank">
									<div className="cat">
										<span className="dot-sm" />
										{project.type}
									</div>
									<ArrowUpRight className="arrow" aria-hidden="true" />
									<h3>{project.name}</h3>
									<p>{project.description}</p>
									<div className="tags">
										{project.stack.map((item) => (
											<span key={item}>{item}</span>
										))}
									</div>
								</a>
							))}
						</div>

						<div className="projects-footer">
							<span>A curated set - most of my projects live on GitHub.</span>
							<a className="text-link" href="https://github.com/Skilles" rel="noreferrer" target="_blank">
								All projects
								<ArrowUpRight className="arrow-mini" aria-hidden="true" />
							</a>
						</div>
					</div>
				</section>

				<section className="contact" id="contact">
					<div className="section-inner">
						<SectionHead number="03" title="Contact" />

						<div className="contact-row">
							<a className="contact-email" href="mailto:hello@bilalmadi.com">
								hello@bilalmadi.com
								<ArrowUpRight aria-hidden="true" />
							</a>
							<div className="contact-side">
								<a href="https://github.com/Skilles" rel="noreferrer" target="_blank">
									GitHub ↗
								</a>
								<br />
								<a href="https://www.linkedin.com/in/bilal-madi" rel="noreferrer" target="_blank">
									LinkedIn ↗
								</a>
								<br />
								<a href="mailto:hello@bilalmadi.com?subject=Resume%20request">Resume ↗</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="left">
					<span>© 2026 Bilal Madi</span>
					<span className="clock" id="clock">
						--:--:-- EST
					</span>
				</div>
				<span>Made with Love · and Astro</span>
			</footer>
		</>
	);
}
