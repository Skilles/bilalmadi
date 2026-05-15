import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../../data/portfolio';
import { container, focusRing, reveal, sectionShell } from './styles';
import { SectionHeader } from './SectionHeader';

type ProjectsProps = {
	githubUrl: string;
	projects: Project[];
};

export function Projects({ githubUrl, projects }: ProjectsProps) {
	return (
		<section className={sectionShell} id="projects">
			<div className={container}>
				<SectionHeader title="Cool Projects" />

				<div className="grid isolate overflow-hidden rounded-md bg-[radial-gradient(circle_at_20%_0%,rgba(80,255,210,0.04),transparent_34%),radial-gradient(circle_at_80%_100%,rgba(150,120,255,0.04),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)_45%,rgba(0,0,0,0.18)),var(--color-obsidian)] md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>

				<div className="flex flex-wrap items-center justify-between gap-5 pt-8 text-[13.5px] text-dim">
					<span>More projects live on GitHub.</span>
					<a
						className={`${focusRing} ${reveal} group relative flex min-h-[280px] flex-col overflow-visible bg-transparent px-6 py-8 text-paper no-underline transition-colors duration-350 before:pointer-events-none before:absolute before:inset-0 before:z-[3] before:bg-[radial-gradient(circle_300px_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--project-accent)_16%,transparent),transparent_70%)] before:opacity-0 before:mix-blend-screen before:transition-opacity before:duration-[400ms] hover:before:opacity-100 [@media(hover:none)]:before:opacity-100 md:min-h-[300px] md:px-8 md:py-9`}
						href={githubUrl}
						rel="noreferrer"
						target="_blank"
					>
						All projects
						<ArrowUpRight aria-hidden="true" className="size-3 transition group-hover:text-acid" />
					</a>
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<a
			className={`${focusRing} ${reveal} group relative flex min-h-[280px] flex-col overflow-hidden bg-transparent px-6 py-8 text-paper no-underline transition-colors duration-350 before:pointer-events-none before:absolute before:inset-0 before:z-[2] before:bg-[radial-gradient(circle_300px_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--project-accent)_18%,transparent),transparent_68%)] before:opacity-0 before:mix-blend-screen before:transition-opacity before:duration-[400ms] hover:before:opacity-100 [@media(hover:none)]:before:opacity-100 md:min-h-[300px] md:px-8 md:py-9`}
			data-project-card
			data-reveal
			href={project.href}
			rel="noreferrer"
			style={{ '--project-accent': project.accentColor } as CSSProperties}
			target="_blank"
		>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -inset-10 z-0 h-[calc(100%+5rem)] w-[calc(100%+5rem)] max-w-none scale-105 object-cover opacity-[0.18] blur-[10px] saturate-[1.1] transition duration-500 [mask-image:radial-gradient(ellipse_at_center,black_0%,black_42%,rgba(0,0,0,0.55)_62%,transparent_86%)] group-hover:scale-[1.08] group-hover:opacity-[0.26] group-hover:blur-[5px] [@media(hover:none)]:opacity-[0.22] [@media(hover:none)]:blur-[7px]"
				decoding="async"
				height={project.imageHeight}
				loading="lazy"
				src={project.imageUrl}
				width={project.imageWidth}
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -inset-6 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.24),rgba(10,10,10,0.18)_42%,transparent_78%)] transition duration-500 group-hover:opacity-80"
			/>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute -inset-8 z-[1] bg-[radial-gradient(circle_at_20%_18%,color-mix(in_oklab,var(--project-accent)_7%,transparent),transparent_56%)] opacity-90 transition duration-500 group-hover:bg-[radial-gradient(circle_at_20%_18%,color-mix(in_oklab,var(--project-accent)_11%,transparent),transparent_60%)]"
			/>

			<ArrowUpRight
				aria-hidden="true"
				className="absolute right-6 top-8 z-10 size-[18px] text-dim transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--project-accent)] [@media(hover:none)]:text-[var(--project-accent)] md:right-8 md:top-9"
			/>

			<h3 className="relative z-10 mb-3.5 pr-8 text-[26px] font-medium leading-[1.1] tracking-[-0.025em]">{project.name}</h3>

			<p className="relative z-10 mb-7 max-w-[95%] flex-1 text-sm leading-[1.6] text-muted">{project.description}</p>

			<p className="relative z-10 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.04em]">
				{project.tags.map((tag) => (
					<span
						className="[color:color-mix(in_oklab,var(--tag-color)_84%,white)] after:ml-2 after:text-dim after:content-['/'] last:after:hidden"
						key={tag.label}
						style={{ '--tag-color': tag.color } as CSSProperties}
					>
						{tag.label}
					</span>
				))}
			</p>
		</a>
	);
}
