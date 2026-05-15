import { ArrowUpRight } from 'lucide-react';
import { container, focusRing, monoLabel, reveal } from './styles';
import { SectionHeader } from './SectionHeader';

type ContactProps = {
	email: string;
	githubUrl: string;
	linkedinUrl: string;
	resumeUrl: string;
};

export function Contact({ email, githubUrl, linkedinUrl, resumeUrl }: ContactProps) {
	const links = [
		{ label: 'GitHub', href: githubUrl },
		{ label: 'LinkedIn', href: linkedinUrl },
		{ label: 'Resume', href: resumeUrl },
	];

	return (
		<section className="relative z-10 px-5 py-16 pb-20 md:px-10 md:py-24 md:pb-28" id="contact">
			<div className={container}>
				<SectionHeader number="03" title="Contact" />

				<div className={`${reveal} flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between md:gap-10`} data-reveal>
					<a
						className={`${focusRing} group relative inline-flex items-center gap-3.5 text-[clamp(25px,8vw,36px)] font-medium leading-none tracking-[-0.025em] text-paper no-underline after:absolute after:bottom-[-10px] after:left-0 after:h-px after:w-full after:bg-line after:transition-colors hover:after:bg-acid md:text-[clamp(28px,4vw,44px)]`}
						href={`mailto:${email}`}
					>
						{email}
						<ArrowUpRight
							aria-hidden="true"
							className="size-6 opacity-40 transition duration-300 group-hover:text-acid group-hover:opacity-100"
						/>
					</a>

					<div className={`${monoLabel} flex flex-col gap-2 text-left leading-8 md:text-right`}>
						{links.map((link) => (
							<a
								className={`${focusRing} inline-flex items-center gap-2 text-muted no-underline transition-colors hover:text-paper md:justify-end`}
								href={link.href}
								key={link.label}
								rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
								target={link.href.startsWith('http') ? '_blank' : undefined}
							>
								{link.label}
								<ArrowUpRight aria-hidden="true" className="size-3" />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
