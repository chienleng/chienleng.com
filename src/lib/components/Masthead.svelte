<script lang="ts">
	import Logo from './Logo.svelte';
	import { site } from '$lib/site';
</script>

<header class="masthead container">
	<a class="brand" href="/" aria-label="chienleng — home">
		<Logo />
	</a>
	<nav class="nav" aria-label="Primary">
		<a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
	</nav>
</header>

<style>
	.masthead {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--su-space-4);
		padding-block: var(--su-space-6);
	}

	.brand {
		font-size: var(--su-font-size-md);
		transition: opacity var(--su-duration-fast) var(--su-ease);
	}

	.brand:hover {
		opacity: 0.72;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--su-space-4);
	}

	.nav a {
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-xs);
		letter-spacing: var(--su-tracking-wide);
		color: var(--su-text-muted);
		transition: color var(--su-duration-fast) var(--su-ease);
	}

	.nav a:hover {
		color: var(--su-text);
	}
</style>
