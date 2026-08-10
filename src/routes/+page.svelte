<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import PackageCard from '$lib/components/PackageCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { packages } from '$lib/packages';
	import { projects } from '$lib/projects';
</script>

<Seo title="chienleng — a playground for tools & data viz" />

<section class="hero container">
	<p class="eyebrow">Playground · Open source · Data viz</p>
	<h1 class="headline">A playground for ideas, tools and data visualisation.</h1>
	<p class="intro">Still tinkering...</p>
</section>

<section class="section container" aria-labelledby="work-heading">
	<SectionHeading index="01" label="Tools" id="work-heading" />
	<div class="feature">
		{#each packages as pkg (pkg.name)}
			<PackageCard {pkg} />
		{/each}
	</div>
</section>

<section class="section container" aria-labelledby="projects-heading">
	<SectionHeading index="02" label="Projects" id="projects-heading" />
	<div class="feature">
		{#each projects as project (project.name)}
			<ProjectCard {project} />
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

	.feature {
		max-width: 34rem;
	}
</style>
