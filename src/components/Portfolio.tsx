import { experienceItems, featuredProjects, profile, socialLinks } from '../data/portfolio';
import { AmbientBackground } from './portfolio/AmbientBackground';
import { Contact } from './portfolio/Contact';
import { Experience } from './portfolio/Experience';
import { Hero } from './portfolio/Hero';
import { Julian } from './portfolio/Julian';
import { Projects } from './portfolio/Projects';
import { SiteFooter } from './portfolio/SiteFooter';

export default function Portfolio() {
	return (
		<>
			<AmbientBackground />

			<main id="main">
				<Hero
					avatarUrl={profile.avatarUrl.src}
					avatarHeight={profile.avatarUrl.height}
					avatarWidth={profile.avatarUrl.width}
					company={profile.company}
					location={profile.location}
					name={profile.name}
					socialLinks={socialLinks}
					title={profile.title}
				/>
				<Experience items={experienceItems} />
				<Projects githubUrl={profile.githubUrl} projects={featuredProjects} />
				<Julian />
				<Contact email={profile.email} githubUrl={profile.githubUrl} linkedinUrl={profile.linkedinUrl} resumeUrl={profile.resumeUrl} />
			</main>

			<SiteFooter />
		</>
	);
}
