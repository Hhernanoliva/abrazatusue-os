<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Lenis from 'lenis';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	$effect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		const id = requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			cancelAnimationFrame(id);
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
