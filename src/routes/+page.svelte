<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import Categorias from '$lib/components/home/Categorias.svelte';
	import Nosotros from '$lib/components/home/Nosotros.svelte';
	import HorariosMapa from '$lib/components/home/HorariosMapa.svelte';
	import Redes from '$lib/components/home/Redes.svelte';
</script>

<svelte:head>
	<title>Abraza Tus Sueños — Pastelería Artesanal · Las Flores</title>
	<meta
		name="description"
		content="Pastelería artesanal y café en Las Flores, Buenos Aires. Tortas, cookies, alfajores y café de especialidad hechos con amor. Visitanos de miércoles a domingo."
	/>
</svelte:head>

<Hero />
<Categorias />
<Nosotros />
<HorariosMapa />
<Redes />
