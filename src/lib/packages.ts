export interface Package {
	/** npm package name (rendered in monospace as the title). */
	name: string;
	/** One-line description. */
	tagline: string;
	/** Install command shown as a code line. */
	install: string;
	/** GitHub repository URL. */
	repo: string;
	/** npm package URL. */
	npm: string;
	stack: string[];
	/** Honest provenance note — e.g. a maintained fork/port. */
	note?: string;
	/** Set for the package that powers this very site. */
	dogfood?: boolean;
}

export const packages: Package[] = [
	{
		name: '@chienleng/stratum-ui',
		tagline:
			'A Svelte 5 component and charting system with switchable, CSS-variable themes — extracted from the interface behind Open Electricity.',
		install: 'pnpm add @chienleng/stratum-ui',
		repo: 'https://github.com/chienleng/stratum-ui',
		npm: 'https://www.npmjs.com/package/@chienleng/stratum-ui',
		stack: ['Svelte 5', 'LayerCake', 'CSS variables'],
		dogfood: true
	}
];
