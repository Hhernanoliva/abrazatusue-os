<script>
	import { animate } from 'animejs';

	const heroReveal = (el) => {
		animate(el, {
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 1000,
			ease: 'outCubic',
			delay: 300
		});
	};
</script>

<section
	class="relative flex items-center justify-center min-h-[100svh] bg-[var(--color-cream)] overflow-hidden"
>
	<!-- Placeholder imagen: reemplazar con <img> cuando llegue foto del local -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-[var(--color-rose-gold)]/30 to-[var(--color-brown)]/60"
	></div>

	<!-- Overlay de textura placeholder -->
	<div
		class="absolute inset-0 opacity-20"
		style="background-image: radial-gradient(circle at 30% 40%, var(--color-blush) 0%, transparent 60%), radial-gradient(circle at 70% 60%, var(--color-rose-gold) 0%, transparent 50%);"
	></div>

	<!-- Contenido -->
	<div
		{@attach heroReveal}
		class="relative z-10 text-center px-6 max-w-2xl mx-auto"
	>
		<!-- Logo placeholder: reemplazar con <img src="/logo.svg" ... /> -->
		<div class="mb-8">
			<p
				class="text-sm font-semibold tracking-[0.3em] uppercase text-[var(--color-white-soft)] opacity-80 mb-3"
			>
				Pastelería Artesanal
			</p>
			<h1
				class="text-5xl md:text-7xl text-[var(--color-white-soft)] leading-tight"
				style="font-family: var(--font-brand);"
			>
				Abraza Tus Sueños
			</h1>
		</div>

		<p
			class="text-lg md:text-xl text-[var(--color-white-soft)] opacity-90 leading-relaxed"
			style="font-family: var(--font-title);"
		>
			Donde cada bocado es un abrazo
		</p>

		<p class="text-sm text-[var(--color-white-soft)] opacity-60 mt-3 tracking-wide">
			Las Flores · Buenos Aires
		</p>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
		<span class="text-xs tracking-widest uppercase text-[var(--color-white-soft)]">Descubrí</span>
		<svg
			class="w-4 h-4 text-[var(--color-white-soft)] animate-bounce"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
</section>
