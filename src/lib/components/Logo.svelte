<script lang="ts">
	// Type logo: the character 建 ("build / establish") as a seal-style mark,
	// locked up with the chienleng wordmark.
	let { wordmark = true }: { wordmark?: boolean } = $props();
</script>

<span class="logo">
	<span class="mark" aria-hidden="true">建</span>
	{#if wordmark}<span class="type">chienleng</span>{/if}
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: var(--su-space-2);
		line-height: 1;
	}

	.mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		top: -0.55em;
		width: 1.5em;
		height: 1.5em;
		font-family:
			'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Microsoft YaHei', var(--su-font-sans);
		font-size: 1.15em;
		font-weight: var(--su-font-weight-semibold);
		line-height: 1;
		color: var(--su-accent-contrast);
		background: var(--su-accent);
		border-radius: var(--su-radius-sm);
	}

	.type {
		font-family: var(--su-font-mono);
		font-size: 1em;
		font-weight: var(--su-font-weight-semibold);
		letter-spacing: var(--su-tracking-wide);
		color: var(--su-text);
	}
</style>
