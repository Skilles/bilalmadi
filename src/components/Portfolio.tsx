import { experienceItems, featuredProjects, profile, socialLinks } from '../data/portfolio';
import { AmbientBackground } from './portfolio/AmbientBackground';
import { Contact } from './portfolio/Contact';
import { Experience } from './portfolio/Experience';
import { Hero } from './portfolio/Hero';
import { Projects } from './portfolio/Projects';
import { SiteFooter } from './portfolio/SiteFooter';

export default function Portfolio() {
	return (
		<>
			<AmbientBackground />

			<main>
				<Hero
					avatarUrl={profile.avatarUrl.src}
					company={profile.company}
					intro={profile.intro}
					location={profile.location}
					name={profile.name}
					socialLinks={socialLinks}
					title={profile.title}
				/>
				<Experience items={experienceItems} />
				<Projects githubUrl={profile.githubUrl} projects={featuredProjects} />
				<Contact email={profile.email} githubUrl={profile.githubUrl} linkedinUrl={profile.linkedinUrl} />
			</main>

			<SiteFooter />
		</>
	);
}
