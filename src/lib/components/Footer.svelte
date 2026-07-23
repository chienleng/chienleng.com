<script lang="ts">
	import { site } from '$lib/site';

	// Baked at build time (the site is prerendered).
	const year = new Date().getFullYear();
</script>

<footer class="foot container">
	<div class="row">
		<span>© {year} {site.handle}</span>
		<span class="business">
			<a href={site.links.business} target="_blank" rel="noopener noreferrer">steventan.com.au ↗</a>
			<span class="muted">— the business me</span>
		</span>
	</div>
	<p class="built">
		Built with
		<a href="https://github.com/chienleng/stratum-ui" target="_blank" rel="noopener noreferrer">
			@chienleng/stratum-ui
		</a>
	</p>
</footer>

<style>
	.foot {
		margin-top: var(--su-space-8);
		padding-block: var(--su-space-8);
		border-top: 1px solid var(--su-border);
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-2xs);
		letter-spacing: var(--su-tracking-wide);
		color: var(--su-text-subtle);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--su-space-2) var(--su-space-5);
	}

	.built {
		margin: var(--su-space-3) 0 0;
	}

	.muted {
		color: var(--su-text-subtle);
	}

	.foot a {
		color: var(--su-text-muted);
		transition: color var(--su-duration-fast) var(--su-ease);
	}

	.foot a:hover {
		color: var(--su-text);
	}
</style>
