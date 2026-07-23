<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import PackageCard from '$lib/components/PackageCard.svelte';
	import { site } from '$lib/site';
	import { packages } from '$lib/packages';
</script>

<Seo title="chienleng — open-source Svelte tools" />

<section class="hero container">
	<p class="eyebrow">Open source · Svelte</p>
	<h1 class="headline">Small, sharp tools for building things with Svelte.</h1>
	<p class="intro">
		Open-source components, charts and utilities — built and maintained by
		<a href={site.links.github} target="_blank" rel="noopener noreferrer">chienleng</a>.
	</p>
</section>

<section class="section container" aria-labelledby="work-heading">
	<SectionHeading index="01" label="Open source" id="work-heading" />
	<div class="feature">
		{#each packages as pkg (pkg.name)}
			<PackageCard {pkg} />
		{/each}
	</div>
</section>

<style>
	.hero {
		padding-block: var(--site-section-y) var(--su-space-10);
	}

	.headline {
		margin: var(--su-space-5) 0 0;
		max-width: 18ch;
		font-size: clamp(2rem, 1.2rem + 3.4vw, 3.25rem);
		font-weight: var(--su-font-weight-semibold);
		line-height: var(--su-leading-tight);
		letter-spacing: -0.02em;
	}

	.intro {
		margin: var(--su-space-6) 0 0;
		max-width: 46ch;
		font-size: var(--su-font-size-lg);
		line-height: var(--su-leading-normal);
		color: var(--su-text-muted);
	}

	.intro a {
		color: var(--su-text);
		font-weight: var(--su-font-weight-medium);
		text-decoration: underline;
		text-decoration-color: var(--su-border-strong);
		text-underline-offset: 3px;
		transition: text-decoration-color var(--su-duration-fast) var(--su-ease);
	}

	.intro a:hover {
		text-decoration-color: var(--su-accent);
	}

	.feature {
		max-width: 34rem;
	}
</style>
