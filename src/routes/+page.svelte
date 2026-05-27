<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import Categorias from '$lib/components/home/Categorias.svelte';
	import Nosotros from '$lib/components/home/Nosotros.svelte';
	import HorariosMapa from '$lib/components/home/HorariosMapa.svelte';
	import Redes from '$lib/components/home/Redes.svelte';

	// Schema CafeOrCoffeeShop — actualizar og:image cuando haya fotos propias
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'CafeOrCoffeeShop',
		name: 'Abraza Tus Sueños',
		description:
			'Cafetería y pastelería artesanal en Las Flores, Buenos Aires. Café de especialidad, tortas, alfajores, cookies y salados hechos con cariño.',
		url: 'https://abrazatusueños.com.ar',
		// TODO: reemplazar con foto real del local
		image: 'https://abrazatusueños.com.ar/og-image.jpg',
		priceRange: '$$',
		servesCuisine: ['Café de especialidad', 'Pastelería artesanal'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Av. Rivadavia 495',
			addressLocality: 'Las Flores',
			addressRegion: 'Buenos Aires',
			addressCountry: 'AR'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: -36.0354,
			longitude: -59.1009
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '12:30'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
				opens: '16:00',
				closes: '19:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Saturday', 'Sunday'],
				opens: '09:30',
				closes: '13:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Saturday', 'Sunday'],
				opens: '16:00',
				closes: '20:00'
			}
		],
		sameAs: ['https://www.instagram.com/_abraza.tus.suenos_/']
	};
</script>

<svelte:head>
	<title>Abraza Tus Sueños — Cafetería y Pastelería Artesanal en Las Flores</title>
	<meta
		name="description"
		content="Café de especialidad y pastelería artesanal en Las Flores, Buenos Aires. Tortas, alfajores, cookies y salados hechos con cariño. Abierto mié–dom."
	/>
	<link rel="canonical" href="https://abrazatusueños.com.ar" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Abraza Tus Sueños — Cafetería y Pastelería Artesanal en Las Flores"
	/>
	<meta
		property="og:description"
		content="Café de especialidad y pastelería artesanal en Las Flores, Buenos Aires. Hechos con cariño."
	/>
	<meta property="og:url" content="https://abrazatusueños.com.ar" />
	<meta property="og:image" content="https://abrazatusueños.com.ar/og-image.jpg" />
	<meta property="og:site_name" content="Abraza Tus Sueños" />
	<meta property="og:locale" content="es_AR" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Abraza Tus Sueños — Cafetería y Pastelería Artesanal en Las Flores"
	/>
	<meta
		name="twitter:description"
		content="Café de especialidad y pastelería artesanal en Las Flores, Buenos Aires."
	/>
	<meta name="twitter:image" content="https://abrazatusueños.com.ar/og-image.jpg" />

	<!-- JSON-LD CafeOrCoffeeShop -->
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>

<Hero />
<Categorias />
<Nosotros />
<HorariosMapa />
<Redes />
