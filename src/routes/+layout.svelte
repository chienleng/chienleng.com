<script lang="ts">
	// The whole design system: stratum-ui's neutral theme (--su-* tokens).
	// Imported once here; its `:where(:root)` arm applies site-wide.
	import '@chienleng/stratum-ui/themes/neutral.css';
	import '../app.css';

	import Masthead from '$lib/components/Masthead.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Masthead />

<main>
	{@render children()}
</main>

<Footer />
