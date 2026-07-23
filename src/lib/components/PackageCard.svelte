<script lang="ts">
	import { Card, CardHeader, CardAction, CardContent, CardFooter } from '@chienleng/stratum-ui/ui';
	import type { Package } from '$lib/packages';

	let { pkg }: { pkg: Package } = $props();
</script>

<Card class="card">
	<CardHeader>
		<code class="name">{pkg.name}</code>
		{#if pkg.dogfood}
			<CardAction>
				<span class="badge">powers this site</span>
			</CardAction>
		{/if}
	</CardHeader>

	<CardContent>
		<div class="content">
			<p class="tagline">{pkg.tagline}</p>

			<code class="install"><span class="prompt" aria-hidden="true">$ </span>{pkg.install}</code>

			{#if pkg.note}
				<p class="note">{pkg.note}</p>
			{/if}

			<ul class="chips" aria-label="Technologies">
				{#each pkg.stack as tech (tech)}
					<li class="chip">{tech}</li>
				{/each}
			</ul>
		</div>
	</CardContent>

	<CardFooter>
		<div class="footer-row">
			{#if pkg.demo}
				<a class="link demo" href={pkg.demo} target="_blank" rel="noopener noreferrer">Demo ↗</a>
			{/if}
			<a class="link" href={pkg.npm} target="_blank" rel="noopener noreferrer">npm ↗</a>
			<a class="link" href={pkg.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
		</div>
	</CardFooter>
</Card>

<style>
	.name {
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-sm);
		font-weight: var(--su-font-weight-medium);
		color: var(--su-text);
		word-break: break-word;
	}

	.badge {
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-2xs);
		letter-spacing: var(--su-tracking-wide);
		text-transform: uppercase;
		color: var(--su-accent-contrast);
		background: var(--su-accent);
		padding: 0.15rem var(--su-space-2);
		border-radius: var(--su-radius-sm);
		white-space: nowrap;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--su-space-3);
	}

	.tagline {
		margin: 0;
		color: var(--su-text-muted);
		font-size: var(--su-font-size-sm);
		line-height: var(--su-leading-snug);
	}

	.install {
		display: block;
		overflow-x: auto;
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-xs);
		color: var(--su-text);
		background: var(--su-surface-muted);
		border: 1px solid var(--su-border);
		border-radius: var(--su-radius-sm);
		padding: var(--su-space-2) var(--su-space-3);
		white-space: nowrap;
	}

	.prompt {
		color: var(--su-text-subtle);
		user-select: none;
	}

	.note {
		margin: 0;
		font-size: var(--su-font-size-xs);
		color: var(--su-text-subtle);
	}

	.footer-row {
		display: flex;
		gap: var(--su-space-4);
		width: 100%;
	}

	.link {
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-xs);
		color: var(--su-text-muted);
		transition: color var(--su-duration-fast) var(--su-ease);
	}

	.link:hover {
		color: var(--su-accent);
	}

	.demo {
		color: var(--su-text);
		font-weight: var(--su-font-weight-medium);
	}
</style>
