<script lang="ts">
	import { animate } from 'animejs';

	const categorias = [
		{ nombre: 'Postres', emoji: '🍰', descripcion: 'Tortas artesanales por porción' },
		{ nombre: 'Bebidas', emoji: '☕', descripcion: 'Café de especialidad y más' },
		{ nombre: 'Salados', emoji: '🥐', descripcion: 'Croissants, tostados y más' },
		{ nombre: 'Cookies', emoji: '🍪', descripcion: 'Clásicas, Marroc, Pistachio...' },
		{ nombre: 'Alfajores', emoji: '✨', descripcion: 'Maicena, coco, chocolate...' }
	];

	// @ts-ignore
	const fadeUp = (el) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate(el, {
						opacity: [0, 1],
						translateY: [30, 0],
						duration: 700,
						ease: 'outCubic'
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	};

	// @ts-ignore
	const staggerCards = (el) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					// @ts-ignore
					animate(el.querySelectorAll('[data-card]'), {
						opacity: [0, 1],
						translateY: [40, 0],
						duration: 600,
						ease: 'outCubic',
						// @ts-ignore
						delay: (_, i) => i * 100
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	};
</script>

<section class="py-20 px-6 bg-[var(--color-white-soft)]">
	<div class="max-w-6xl mx-auto">
		<!-- Título -->
		<div {@attach fadeUp} class="text-center mb-14">
			<p class="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gray-warm)] mb-3">
				Lo que hacemos
			</p>
			<h2
				class="text-3xl md:text-4xl text-[var(--color-brown)]"
				style="font-family: var(--font-title);"
			>
				Hecho con cariño, cada día
			</h2>
		</div>

		<!-- Grid de categorías -->
		<div
			{@attach staggerCards}
			class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
		>
			{#each categorias as cat}
				<div
					data-card
					class="group flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--color-cream)] hover:bg-[var(--color-blush)]/20 transition-colors duration-300 cursor-default"
					style="opacity: 0;"
				>
					<!-- Placeholder imagen: reemplazar con <img> de la categoría -->
					<div
						class="w-full aspect-square rounded-xl bg-[var(--color-rose-gold)]/30 flex items-center justify-center mb-4 text-4xl group-hover:scale-105 transition-transform duration-300"
					>
						{cat.emoji}
					</div>
					<h3
						class="text-sm font-bold tracking-wide uppercase text-[var(--color-brown)] mb-1"
					>
						{cat.nombre}
					</h3>
					<p class="text-xs text-[var(--color-gray-warm)] leading-relaxed">
						{cat.descripcion}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
