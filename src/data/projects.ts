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
		subtitle: 'Picaderas artesanales y empanadas a domicilio en Santo Domingo',
		description:
			'Sitio web para negocio gastronómico con catálogo de picaderas (6 a 100 unidades), calculadora de presupuesto por cantidad y combo, y pedidos por WhatsApp.',
		image: `${BASE}piccola-torta.jpg`,
		link: 'https://piccola-picaderas.netlify.app/',
	},
	{
		slug: 'evolve',
		title: 'Evolve',
		subtitle: 'Barber studio — «Evolve The Way You Think»',
		description:
			'Landing page para barbería en Los Ángeles: presentación del maestro barbero, servicios con precios (corte, lineup, barba, visitas a domicilio), horarios y reserva.',
		image: `${BASE}Evolve.jpg`,
		link: 'https://dashing-scone-868014.netlify.app/',
	},
	{
		slug: 'bootis-tec',
		title: 'Bootis Tec',
		subtitle: 'Sistemas de seguridad para negocios',
		description:
			'Sitio corporativo de tecnología de seguridad: cámaras, alarmas inteligentes, control de acceso, intercom y puertas de seguridad para proteger edificios, coches y locales.',
		image: `${BASE}Bootis-tec.jpg`,
		link: 'https://charming-sorbet-061cc0.netlify.app/',
	},
	{
		slug: 'serenade',
		title: 'Serenade',
		subtitle: 'Blockchain escalable con IA — Serendale.AI',
		description:
			'Landing de proyecto blockchain: red de 120K TPS con seguridad de datos basada en IA, consenso Proof of State, smart contracts, hoja de ruta y whitepaper.',
		image: `${BASE}serenade.jpg`,
		link: 'https://playful-kashata-de27b3.netlify.app/',
	},
	{
		slug: 'ice-juices',
		title: 'Ice Juices',
		subtitle: 'E-liquids premium para vapeo — venta mayorista',
		description:
			'Sitio de marca de e-liquids con verificación de edad, catálogo de sabores (Mint, Pear, Pina Colada), localizador de tiendas, información para distribuidores mayoristas y contacto B2B.',
		image: `${BASE}icejuice.jpg`,
		full: true,
		link: 'https://icejuices.com/',
	},
];
