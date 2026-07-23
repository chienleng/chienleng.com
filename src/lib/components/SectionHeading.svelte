<script lang="ts">
	let {
		label,
		index,
		id
	}: {
		label: string;
		/** Two-digit section index, e.g. "01". */
		index?: string;
		id?: string;
	} = $props();
</script>

<div class="heading">
	{#if index}
		<span class="index" aria-hidden="true">{index}</span>
	{/if}
	<h2 class="label eyebrow" {id}>{label}</h2>
	<span class="rule" aria-hidden="true"></span>
</div>

<style>
	.heading {
		display: flex;
		align-items: center;
		gap: var(--su-space-3);
		margin-bottom: var(--su-space-8);
	}

	.index {
		font-family: var(--su-font-mono);
		font-size: var(--su-font-size-xs);
		font-variant-numeric: tabular-nums;
		color: var(--su-text-subtle);
	}

	.label {
		margin: 0;
	}

	.rule {
		flex: 1;
		height: 1px;
		background: var(--su-border);
	}
</style>
