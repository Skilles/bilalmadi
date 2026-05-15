import { Contact, FileText, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import bilalImage from '../assets/bilal.jpg';
import randonautImage from '../assets/randonaut.webp';
import spokenwordImage from '../assets/spokenword.png';
import brandonImage from '../assets/brandon.png';

export type SocialLink = {
	label: string;
	href: string;
	icon: LucideIcon;
};

export type ExperienceItem = {
	role: string;
	org: string;
	when: string;
	description: string;
};

export type Project = {
	name: string;
	type: string;
	href: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	description: string;
	tags: ProjectTag[];
	accentColor: string;
};

export type ProjectTag = {
	label: string;
	color: string;
};

export const profile = {
	name: 'Bilal Madi',
	location: 'Atlanta, GA',
	title: 'Software Engineer',
	company: 'WebstaurantStore',
	email: 'hello@bilalmadi.com',
	resumeUrl: '/resume.pdf',
	avatarUrl: bilalImage,
	intro:
		'Building production web software and side projects across AI tools, game systems, automation, and developer-focused interfaces.',
	githubUrl: 'https://github.com/Skilles',
	linkedinUrl: 'https://www.linkedin.com/in/bilal-madi',
};

export const socialLinks: SocialLink[] = [
	{ label: 'Resume', href: profile.resumeUrl, icon: FileText },
	{ label: 'GitHub', href: profile.githubUrl, icon: GitBranch },
	{ label: 'LinkedIn', href: profile.linkedinUrl, icon: Contact },
];

export const experienceItems: ExperienceItem[] = [
	{
		role: 'Software Engineer II',
		org: 'WebstaurantStore',
		when: 'Dec 2025 - Present',
		description:
			'Building highly scalable .NET-backed applications utilizing artificial intelligence to automate expense reporting and analysis.',
	},
	{
		role: 'Software Engineer',
		org: 'WebstaurantStore',
		when: '2022 - 2025',
		description:
			'Progressed through my internship to junior and mid-level engineering roles, building internal systems using .NET and React.',
	},
	{
		role: 'B.S. Computer Science',
		org: 'University of Georgia',
		when: '2019 - 2023',
		description: 'After pivoting from pre-med to computer science my junior year, I fell in love with programming and built numerous projects across games, AI, course tooling, graphics, and web apps.',
	},
	{
		role: 'Co-Founder',
		org: 'airSAFE Diagnostics',
		when: '2017 - 2019',
		description: 'Sponsored by MIT through their Launch program, a team and I developed and pitched a portable air sensor that detected precise CO2 and VOC levels.',
	},
];

const tagColors = {
	portfolio: '#38bdf8',
	frontend: '#22d3ee',
	ai: '#c084fc',
	python: '#10b981',
	game: '#a3e635',
	dotnet: '#0e9b31',
	media: '#f97316',
	security: '#f43f5e',
	desktop: '#818cf8',
	food: '#f59e0b',
	java: '#fb7185',
	kotlin: '#c084fc',
} as const;

export const featuredProjects: Project[] = [
	{
		name: 'This Website',
		type: 'Portfolio',
		href: 'https://github.com/Skilles/bilal-personal',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-current-site/Skilles/bilal-personal',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'The site you are currently viewing. Built with Astro, React, and Tailwind.',
		tags: [
			{ label: 'Portfolio', color: tagColors.portfolio },
			{ label: 'Astro', color: tagColors.frontend },
			{ label: 'React', color: tagColors.frontend },
		],
		accentColor: '#c9f046',
	},
	{
		name: 'Brandon',
		type: 'Interactive Project',
		href: 'https://heyb.ai',
		imageUrl: brandonImage.src,
		imageWidth: brandonImage.width,
		imageHeight: brandonImage.height,
		description:
			'An AI-guided platform with a mission to democratize trademark filing for small businesses.',
		tags: [
			{ label: 'AI Product', color: tagColors.ai },
			{ label: 'Next.js', color: tagColors.frontend },
			{ label: 'Python', color: tagColors.python },
		],
		accentColor: '#108545',
	},
	{
		name: 'Randonaut',
		type: 'Unity Game',
		href: 'https://github.com/Skilles/Randonaut',
		imageUrl: randonautImage.src,
		imageWidth: randonautImage.width,
		imageHeight: randonautImage.height,
		description:
			'A top-down Unity game project with a focus on emergent gameplay and pixel-based interactions.',
		tags: [
			{ label: 'Game Dev', color: tagColors.game },
			{ label: 'Unity', color: tagColors.frontend },
			{ label: 'C#', color: tagColors.dotnet },
		],
		accentColor: '#a58bff',
	},
	{
		name: 'QRMovie',
		type: 'Media Experiment',
		href: 'https://github.com/Skilles/QRMovie',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-qrmovie/Skilles/QRMovie',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'An experiment in packing binary data into colored QR-code frames, pushing against storage, timing, and playback constraints.',
		tags: [
			{ label: 'Media Encoding', color: tagColors.media },
			{ label: 'FFmpeg', color: tagColors.frontend },
			{ label: 'Python', color: tagColors.python },
		],
		accentColor: '#36d7ff',
	},
	{
		name: 'Minecraft Mods',
		type: 'Game Modding',
		href: 'https://github.com/Skilles?tab=repositories&q=&type=&language=&sort=',
		imageUrl: spokenwordImage.src,
		imageWidth: spokenwordImage.width,
		imageHeight: spokenwordImage.height,
		description:
			'Public Minecraft mod projects including SpokenWord, MobMincer, and Craftonauts, with a theme of automation and AI-assisted content. Totaling over 4k downloads.',
		tags: [
			{ label: 'Game Mods', color: tagColors.game },
			{ label: 'Java', color: tagColors.java },
			{ label: 'Kotlin', color: tagColors.kotlin },
		],
		accentColor: '#7ddf64',
	},
	{
		name: 'LsbSteganographer',
		type: 'Security Tool',
		href: 'https://github.com/Skilles/LsbSteganographer',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-lsb-steganographer/Skilles/LsbSteganographer',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'A desktop utility for hiding and recovering text inside images using least-significant-bit steganography.',
		tags: [
			{ label: 'Data Hiding', color: tagColors.security },
			{ label: 'WinForms', color: tagColors.desktop },
			{ label: 'C#', color: tagColors.dotnet },
		],
		accentColor: '#a58bff',
	},
	{
		name: 'Àlacart',
		type: 'Hackathon Web App',
		href: 'https://github.com/Skilles/A-La-Cart',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-a-la-cart/Skilles/A-La-Cart',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'A 24-hour UGA Hackathon web app that recommends foods from a custom fitness profile and nutrition goals.',
		tags: [
			{ label: 'Nutrition', color: tagColors.food },
			{ label: 'Django', color: tagColors.frontend },
			{ label: 'Python', color: tagColors.python },
		],
		accentColor: '#ffb84a',
	},
	{
		name: 'PaintAI',
		type: 'Creative AI',
		href: 'https://github.com/Skilles/PaintAI',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-paintai/Skilles/PaintAI',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'A simple painting program that predicts the digit on the canvas while the user draws with adjustable brush and color controls.',
		tags: [
			{ label: 'Machine Learning', color: tagColors.ai },
			{ label: 'WinForms', color: tagColors.desktop },
			{ label: 'C#', color: tagColors.dotnet },
		],
		accentColor: '#36d7ff',
	},
	{
		name: 'BlackjackAI',
		type: 'AI Simulation',
		href: 'https://github.com/Skilles/Blackjack-AI',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-blackjack-ai/Skilles/Blackjack-AI',
		imageWidth: 1200,
		imageHeight: 600,
		description:
			'A blackjack trainer using NEAT-generated neural networks to evolve strategy against the house and compare outcomes with known optimal play.',
		tags: [
			{ label: 'Machine Learning', color: tagColors.ai },
			{ label: 'NEAT', color: tagColors.ai },
			{ label: 'Python', color: tagColors.python },
		],
		accentColor: '#ff4f87',
	},
];
