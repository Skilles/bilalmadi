import { profile } from '../../data/portfolio';

export function SiteFooter() {
	return (
		<footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/7 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-dim md:px-10 md:py-8 md:text-[10.5px]">
			<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
				<span>© 2026 {profile.name}</span>
			</div>
			<span>Made with love · and Astro</span>
		</footer>
	);
}
