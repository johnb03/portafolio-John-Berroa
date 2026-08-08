const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	image: string;
	full?: boolean;
	link?: string;
}

export const projects: Project[] = [
	{
		slug: 'piccola-torta',
		title: 'Piccola Torta',
		subtitle: '',
		description: '',
		image: `${BASE}piccola-torta.jpg`,
		link: 'https://piccola-picaderas.netlify.app/',
	},
	{
		slug: 'evolve',
		title: 'Evolve',
		subtitle: '',
		description: '',
		image: `${BASE}Evolve.jpg`,
		link: 'https://dashing-scone-868014.netlify.app/',
	},
	{
		slug: 'bootis-tec',
		title: 'Bootis Tec',
		subtitle: '',
		description: '',
		image: `${BASE}Bootis-tec.jpg`,
		link: 'https://charming-sorbet-061cc0.netlify.app/',
	},
	{
		slug: 'serenade',
		title: 'Serenade',
		subtitle: '',
		description: '',
		image: `${BASE}serenade.jpg`,
		link: 'https://playful-kashata-de27b3.netlify.app/',
	},
	{
		slug: 'ice-juices',
		title: 'Ice Juices',
		subtitle: '',
		description: '',
		image: `${BASE}icejuice.jpg`,
		full: true,
		link: 'https://icejuices.com/',
	},
];
