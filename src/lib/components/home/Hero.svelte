<script lang="ts">
	import { reveal, magnetic } from '$lib/attachments';
	import { scroll, scrollToId } from '$lib/scroll.svelte';
	import Figura from '$lib/components/Figura.svelte';

	// Parallax de la foto: pipeline Lenis -> $state -> $derived -> transform.
	let scrollY = $state(0);
	let parallax = $derived(scrollY * 0.12);

	$effect(() => {
		const lenis = scroll.lenis;
		if (!lenis) return;
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const onScroll = (e: { scroll: number }) => (scrollY = e.scroll);
		lenis.on('scroll', onScroll);
		return () => lenis.off('scroll', onScroll);
	});

	// Horario del día (calculado al cargar). 0=Dom ... 6=Sáb.
	const dia = new Date().getDay();
	const horarioHoy =
		dia === 1 || dia === 2
			? 'Hoy cerrado'
			: dia === 0 || dia === 6
				? 'Hoy 9:30–13:00 · 16:00–20:00'
				: 'Hoy 9:00–12:30 · 16:00–19:00';
</script>

<section
	class="relative grid min-h-[100svh] grid-cols-1 items-center gap-8 overflow-hidden bg-[var(--color-cream)] pt-24 md:grid-cols-2 md:gap-0 md:pt-0 md:pb-0"
>
	<!-- Texto (izquierda) -->
	<div
		{@attach reveal({ y: 28, duration: 900 })}
		class="relative z-10 px-6 sm:px-10 md:py-24 md:pl-[max(2rem,6vw)] md:pr-12"
	>
		<p
			class="mb-5 text-xs font-semibold tracking-[0.3em] text-[var(--color-gray-warm)] uppercase"
		>
			Pastelería artesanal · Las Flores
		</p>

		<h1
			class="text-4xl leading-[1.08] font-medium tracking-tight text-[var(--color-brown)] sm:text-5xl md:text-6xl"
			style="font-family: var(--font-title);"
		>
			Sentí el sabor como era antes.<br />
			<span class="text-[var(--color-rose-gold)]">Real, como en casa.</span>
		</h1>

		<p
			class="mt-6 max-w-md text-base leading-relaxed text-[var(--color-brown)]/80 md:text-lg"
		>
			Cafetería y pastelería artesanal en Las Flores, Buenos Aires. Todo hecho con nuestras manos, recién salido del horno.
		</p>

		<div class="mt-9 flex flex-col items-start gap-4">
			<span class="inline-block" {@attach magnetic({ strength: 0.35 })}>
				<button
					type="button"
					onclick={() => scrollToId('#horarios')}
					class="rounded-full bg-[var(--color-cta)] px-8 py-3.5 text-sm font-semibold tracking-wider text-white uppercase shadow-[var(--shadow-soft)] transition-[background-color,box-shadow] duration-250 hover:bg-[var(--color-cta-hover)] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]"
				>
					Vení a visitarnos
				</button>
			</span>

			<p class="text-sm tracking-wide text-[var(--color-gray-warm)]">
				Av. Rivadavia 495, Las Flores · {horarioHoy}
			</p>
		</div>
	</div>

	<!-- Foto (derecha) -->
	<div class="relative h-96 w-full self-stretch overflow-hidden sm:h-[28rem] md:h-full">
		<!-- Capa con parallax. Foto real: <Figura src="/hero-local.jpg" alt="..." eager /> -->
		<div
			class="absolute inset-x-0 top-[-10%] h-[120%]"
			style="transform: translateY({parallax}px); will-change: transform;"
		>
			<Figura
				src="/hero.webp"
				alt="Mesa con café y pastelería en Abraza Tus Sueños"
				eager
				gradient="radial-gradient(120% 80% at 70% 30%, var(--color-blush) 0%, transparent 55%), radial-gradient(100% 90% at 30% 80%, var(--color-rose-gold) 0%, transparent 60%), linear-gradient(160deg, #fbe7df 0%, var(--color-cream) 100%)"
			/>
		</div>

		<!-- Fade suave hacia el texto, angosto -->
		<div
			class="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-[var(--color-cream)] to-transparent md:block"
		></div>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--color-cream)] to-transparent md:hidden"
		></div>
		<div
			class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-cream)] to-transparent md:hidden"
		></div>
	</div>

	<!-- Bridge mobile: fundido cream → white-soft hacia la siguiente sección -->
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-b from-transparent to-[var(--color-white-soft)] md:hidden"
	></div>
</section>
