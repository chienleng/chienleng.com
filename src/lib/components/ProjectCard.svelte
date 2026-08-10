<script lang="ts">
	import { Card, CardHeader, CardContent, CardFooter } from '@chienleng/stratum-ui/ui';
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
</script>

<Card class="card">
	<CardHeader>
		<code class="name">{project.name}</code>
	</CardHeader>

	<CardContent>
		<div class="content">
			<img
				class="shot"
				src={project.image.src}
				alt={project.image.alt}
				width={project.image.width}
				height={project.image.height}
				loading="lazy"
			/>

			<p class="tagline">{project.tagline}</p>

			<ul class="chips" aria-label="Technologies">
				{#each project.stack as tech (tech)}
					<li class="chip">{tech}</li>
				{/each}
			</ul>
		</div>
	</CardContent>

	<CardFooter>
		<div class="footer-row">
			{#if project.site}
				<a class="link site" href={project.site} target="_blank" rel="noopener noreferrer">
					Live ↗
				</a>
			{/if}
			<a class="link" href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
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

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--su-space-3);
	}

	.shot {
		width: 100%;
		height: auto;
		border: 1px solid var(--su-border);
		border-radius: var(--su-radius-sm);
	}

	.tagline {
		margin: 0;
		color: var(--su-text-muted);
		font-size: var(--su-font-size-sm);
		line-height: var(--su-leading-snug);
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

	.site {
		color: var(--su-text);
		font-weight: var(--su-font-weight-medium);
	}
</style>
