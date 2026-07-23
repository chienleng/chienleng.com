/** Site-wide metadata — single source of truth for SEO and links. */
export const site = {
	/** Nickname / handle — this site goes by the nick, not a name. */
	handle: 'chienleng',
	url: 'https://chienleng.com',
	locale: 'en_AU',
	description: 'Open-source Svelte components, charts and tools by chienleng.',
	ogImage: '/og-image.png',
	links: {
		github: 'https://github.com/chienleng',
		/** steventan.com.au — the business/design identity. */
		business: 'https://steventan.com.au'
	}
} as const;
