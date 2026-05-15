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
		when: 'DEC 2025 - NOW',
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
		description: 'After pivoting from pre-med to computer science my junior year, I fell in love with programming  and built numerous projects across games, AI, course tooling, graphics, and web apps.',
	},
	{
		role: 'Co-Founder',
		org: 'airSAFE Diagnostics',
		when: '2017 - 2019',
		description: 'Sponsored by MIT through their Launch program, a team and I developed and pitched a portable air sensor that detected precise CO2 and VOC levels.',
	},
];

export const featuredProjects: Project[] = [
	{
		name: 'This Website',
		type: 'Portfolio',
		href: 'https://github.com/Skilles/bilal-personal',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-current-site/Skilles/bilal-personal',
		description:
			'The site you are currently viewing. Built with Astro, React, and Tailwind.',
		tags: [
			{ label: 'Portfolio', color: '#ff4f87' },
			{ label: 'Astro', color: '#ffb84a' },
			{ label: 'React', color: '#36d7ff' },
		],
		accentColor: '#c9f046',
	},
	{
		name: 'Brandon',
		type: 'Interactive Project',
		href: 'https://heyb.ai',
		imageUrl: brandonImage.src,
		description:
			'An AI-guided platform with a mission to democratize trademark filing for small businesses.',
		tags: [
			{ label: 'AI Product', color: '#ff4f87' },
			{ label: 'Next.JS', color: '#ffb84a' },
			{ label: 'Python', color: '#36d7ff' },
		],
		accentColor: '#108545',
	},
	{
		name: 'Randonaut',
		type: 'Unity Game',
		href: 'https://github.com/Skilles/Randonaut',
		imageUrl: randonautImage.src,
		description:
			'A top-down Unity game project with a focus on emergent gameplay and pixel-based interactions.',
		tags: [
			{ label: 'Game Dev', color: '#a58bff' },
			{ label: 'Unity', color: '#ffb84a' },
			{ label: 'C#', color: '#36d7ff' },
		],
		accentColor: '#a58bff',
	},
	{
		name: 'QRMovie',
		type: 'Media Experiment',
		href: 'https://github.com/Skilles/QRMovie',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-qrmovie/Skilles/QRMovie',
		description:
			'An experiment in packing binary data into colored QR-code frames, pushing against storage, timing, and playback constraints.',
		tags: [
			{ label: 'Media Encoding', color: '#ff4f87' },
			{ label: 'FFmpeg', color: '#ffb84a' },
			{ label: 'Python', color: '#36d7ff' },
		],
		accentColor: '#36d7ff',
	},
	{
		name: 'Minecraft Mods',
		type: 'Game Modding',
		href: 'https://github.com/Skilles?tab=repositories&q=&type=&language=&sort=',
		imageUrl: spokenwordImage.src,
		description:
			'Public Minecraft mod projects including SpokenWord, MobMincer, and Craftonauts, with a theme of automation and AI-assisted content. Totaling over 4k downloads.',
		tags: [
			{ label: 'Game Mods', color: '#7ddf64' },
			{ label: 'Java', color: '#ffb84a' },
			{ label: 'Kotlin', color: '#36d7ff' },
		],
		accentColor: '#7ddf64',
	},
	{
		name: 'LsbSteganographer',
		type: 'Security Tool',
		href: 'https://github.com/Skilles/LsbSteganographer',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-lsb-steganographer/Skilles/LsbSteganographer',
		description:
			'A desktop utility for hiding and recovering text inside images using least-significant-bit steganography.',
		tags: [
			{ label: 'Data Hiding', color: '#a58bff' },
			{ label: 'WinForms', color: '#ffb84a' },
			{ label: 'C#', color: '#36d7ff' },
		],
		accentColor: '#a58bff',
	},
	{
		name: 'Àlacart',
		type: 'Hackathon Web App',
		href: 'https://github.com/Skilles/A-La-Cart',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-a-la-cart/Skilles/A-La-Cart',
		description:
			'A 24-hour UGA Hackathon web app that recommends foods from a custom fitness profile and nutrition goals.',
		tags: [
			{ label: 'Nutrition', color: '#ff4f87' },
			{ label: 'Django', color: '#ffb84a' },
			{ label: 'Python', color: '#36d7ff' },
		],
		accentColor: '#ffb84a',
	},
	{
		name: 'PaintAI',
		type: 'Creative AI',
		href: 'https://github.com/Skilles/PaintAI',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-paintai/Skilles/PaintAI',
		description:
			'A simple painting program that predicts the digit on the canvas while the user draws with adjustable brush and color controls.',
		tags: [
			{ label: 'Machine Learning', color: '#ff4f87' },
			{ label: 'WinForms', color: '#ffb84a' },
			{ label: 'C#', color: '#36d7ff' },
		],
		accentColor: '#36d7ff',
	},
	{
		name: 'BlackjackAI',
		type: 'AI Simulation',
		href: 'https://github.com/Skilles/Blackjack-AI',
		imageUrl: 'https://opengraph.githubassets.com/bilal-portfolio-blackjack-ai/Skilles/Blackjack-AI',
		description:
			'A blackjack trainer using NEAT-generated neural networks to evolve strategy against the house and compare outcomes with known optimal play.',
		tags: [
			{ label: 'Machine Learning', color: '#ff4f87' },
			{ label: 'NEAT', color: '#ffb84a' },
			{ label: 'Python', color: '#36d7ff' },
		],
		accentColor: '#ff4f87',
	},
];
