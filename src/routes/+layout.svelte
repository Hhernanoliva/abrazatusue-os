<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Lenis from 'lenis';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { scroll } from '$lib/scroll.svelte';

	let { children } = $props();

	$effect(() => {
		const lenis = new Lenis({ lerp: 0.15 });
		scroll.lenis = lenis;

		const tick = (time = 0) => {
			lenis.raf(time);
			requestAnimationFrame(tick);
		};
		const id = requestAnimationFrame(tick);

		return () => {
			lenis.destroy();
			cancelAnimationFrame(id);
			scroll.lenis = null;
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
