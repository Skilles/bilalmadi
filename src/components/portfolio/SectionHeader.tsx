import { monoLabel, reveal } from './styles';

type SectionHeaderProps = {
	title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
	return (
		<div
			className={`${reveal} mb-10 flex flex-wrap items-center gap-3 border-b border-white/6 pb-7 md:gap-10`}
			data-reveal
		>
			<h2 className={`${monoLabel} flex items-center gap-2 text-paper md:gap-3`}>
				<span className="mx-0.5 text-line">/</span>
				{title}
			</h2>
		</div>
	);
}
