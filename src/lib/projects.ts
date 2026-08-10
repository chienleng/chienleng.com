import trmnlEnergyShot from '$lib/assets/trmnl-screens-energy.png';

export interface Project {
	/** Project name (rendered in monospace as the title). */
	name: string;
	/** One-line description. */
	tagline: string;
	/** GitHub repository URL. */
	repo: string;
	/** Live site URL. */
	site?: string;
	stack: string[];
	/** Screenshot shown at the top of the card. */
	image: { src: string; alt: string; width: number; height: number };
}

export const projects: Project[] = [
	{
		name: 'trmnl-screens',
		tagline:
			'Dashboard screens for TRMNL e-ink displays — a black-and-white brutalist stratum-ui theme rendering live NEM power data, Melbourne weather and more.',
		repo: 'https://github.com/chienleng/trmnl-screens',
		site: 'https://trmnl.chienleng.com',
		stack: ['SvelteKit', 'stratum-ui', 'Cloudflare Workers', 'e-ink'],
		image: {
			src: trmnlEnergyShot,
			alt: 'NEM Power screen: greyscale stacked area chart of generation by fuel tech with renewables, generation and peak stat tiles',
			width: 800,
			height: 480
		}
	}
];
