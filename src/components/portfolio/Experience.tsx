import type { ExperienceItem } from '../../data/portfolio';
import { container, monoLabel, reveal, sectionShell } from './styles';
import { SectionHeader } from './SectionHeader';

type ExperienceProps = {
	items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
	return (
		<section className={sectionShell} id="experience">
			<div className={container}>
				<SectionHeader title="Experience" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 [&:has([data-experience-card]:not(:first-child):hover)_[data-experience-marker='primary']]:bg-line">
					{items.map((item, index) => (
						<article
							className={`${reveal} group relative pb-7 transition-transform duration-400 hover:-translate-y-0.5 md:px-7 md:pb-8 md:pt-2 lg:border-l lg:border-white/6 lg:first:border-l-0 lg:first:pl-0 ${
								index % 2 === 1 ? 'md:border-l md:border-white/6' : 'md:pl-0 lg:pl-7'
							} ${index > 1 ? 'border-t border-white/6 pt-8 md:mt-2 lg:mt-0 lg:border-t-0' : ''} ${
								index < items.length - 1 ? 'mb-7 border-b border-white/6 md:mb-0 md:border-b-0' : ''
							}`}
							data-experience-card
							data-reveal
							key={`${item.role}-${item.org}`}
						>
							<div className={`${monoLabel} mb-9 flex items-center gap-2.5 text-dim`}>
								<span
									className={`size-[5px] rounded-full transition-colors ${
										index === 0 ? 'bg-acid' : 'bg-line group-hover:bg-acid'
									}`}
									data-experience-marker={index === 0 ? 'primary' : undefined}
								/>
								{item.when}
							</div>
							<h3 className="mb-1.5 text-xl font-medium tracking-[-0.015em] text-paper">{item.role}</h3>
							<p className="mb-5 text-sm text-muted">{item.org}</p>
							<p className="text-[13.5px] leading-[1.65] text-dim">{item.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
