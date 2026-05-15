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

				<div className="grid overflow-hidden rounded-sm border border-white/6 bg-white/6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>

				<div className="flex flex-wrap items-center justify-between gap-5 pt-8 text-[13.5px] text-dim">
					<span>More projects live on GitHub.</span>
					<a
						className={`${focusRing} group relative inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.08em] text-paper no-underline after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:bg-dim after:transition-colors hover:after:bg-acid`}
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
			className={`${focusRing} ${reveal} group relative flex min-h-[280px] flex-col overflow-hidden bg-obsidian px-6 py-8 text-paper no-underline transition-colors duration-350 before:pointer-events-none before:absolute before:inset-0 before:z-[2] before:bg-[radial-gradient(circle_300px_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--project-accent)_28%,transparent),transparent_62%)] before:opacity-0 before:mix-blend-screen before:transition-opacity before:duration-[400ms] after:absolute after:bottom-0 after:left-0 after:right-0 after:z-[3] after:h-px after:origin-left after:scale-x-0 after:bg-[var(--project-accent)] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.015] hover:before:opacity-100 hover:after:scale-x-100 [@media(hover:none)]:bg-white/[0.015] [@media(hover:none)]:before:opacity-100 [@media(hover:none)]:after:scale-x-100 md:min-h-[300px] md:px-8 md:py-9`}
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
				className="absolute inset-0 z-0 size-full scale-110 object-cover opacity-[0.18] blur-[8px] saturate-[1.2] transition duration-500 group-hover:scale-[1.14] group-hover:opacity-[0.28] group-hover:blur-[3px] [@media(hover:none)]:opacity-[0.24] [@media(hover:none)]:blur-[6px]"
				decoding="async"
				height={project.imageHeight}
				loading="lazy"
				src={project.imageUrl}
				width={project.imageWidth}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(10,10,10,0.58),rgba(10,10,10,0.88)_58%,rgba(10,10,10,0.98)),radial-gradient(circle_at_18%_14%,color-mix(in_oklab,var(--project-accent)_14%,transparent),transparent_50%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(10,10,10,0.5),rgba(10,10,10,0.82)_58%,rgba(10,10,10,0.96)),radial-gradient(circle_at_18%_14%,color-mix(in_oklab,var(--project-accent)_18%,transparent),transparent_50%)]"
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
