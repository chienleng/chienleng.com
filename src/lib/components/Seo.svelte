<script lang="ts">
	import { site } from '$lib/site';

	let {
		title,
		description = site.description,
		path = '/',
		type = 'website'
	}: {
		title: string;
		description?: string;
		path?: string;
		type?: 'website' | 'article';
	} = $props();

	const canonical = $derived(new URL(path, site.url).href);
	const ogImage = new URL(site.ogImage, site.url).href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.handle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
