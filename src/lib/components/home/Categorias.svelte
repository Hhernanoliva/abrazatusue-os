<script lang="ts">
	import { reveal, revealStagger } from '$lib/attachments';
	import Figura from '$lib/components/Figura.svelte';

	// Resto de categorías (sin precios, sin listar ítems con valores — visual y aspiracional).
	const categorias = [
		{ nombre: 'Postres', desc: 'Matilda, rogel, cheesecake, balcarce, carrot. Por porción, frescos del día.', badge: 'Por porción' },
		{ nombre: 'Alfajores', desc: 'Maicena, coco, nuez, chocolate, frutos rojos. De los de antes.', badge: null },
		{ nombre: 'Salados', desc: 'Croissants, tostados, chipá, avocado toast. Para cualquier momento.', badge: null },
		{ nombre: 'Bebidas', desc: 'Café de especialidad, smoothies, jugo exprimido y clásicos.', badge: 'De especialidad' }
	];
</script>

<section id="categorias" class="relative z-[2] bg-[var(--color-white-soft)] px-6 py-20 md:py-28">
	<div class="mx-auto max-w-6xl">
		<!-- Intro: el contraste genuino vs. industrial -->
		<div {@attach reveal()} class="mx-auto mb-16 max-w-2xl text-center">
			<p class="mb-4 text-xs font-semibold tracking-[0.3em] text-[var(--color-gray-warm)] uppercase">
				Lo genuino
			</p>
			<h2
				class="mb-5 text-3xl leading-tight font-medium tracking-tight text-[var(--color-brown)] md:text-4xl"
				style="font-family: var(--font-title);"
			>
				El sabor real que casi no se encuentra
			</h2>
			<p class="text-base leading-relaxed text-[var(--color-brown)]/75">
				Hoy mucho se hace rápido, se abarata, se compra ya hecho. Nosotros no. Acá todo es
				artesanal, fresco del día, con materia prima de verdad.
			</p>
		</div>

		<!-- Chipá: producto estrella -->
		<div
			{@attach reveal({ y: 32 })}
			class="mb-16 grid grid-cols-1 overflow-hidden rounded-3xl bg-[var(--color-cream)] shadow-[var(--shadow-soft)] md:grid-cols-2"
		>
			<!-- Foto Chipá: <Figura src="/chipa.jpg" alt="Chipá recién horneada" /> -->
			<div class="relative min-h-56 md:min-h-[22rem]">
				<Figura
					src="/expample-2.webp"
					alt="Chipá recién horneada"
					gradient="radial-gradient(120% 100% at 60% 40%, #f6dcae 0%, var(--color-rose-gold) 70%, #d98f6a 100%)"
				/>
			</div>
			<!-- Texto Chipá -->
			<div class="flex flex-col justify-center p-8 md:p-12">
				<span
					class="mb-4 inline-flex w-fit items-center rounded-full border border-[var(--color-rose-gold)] px-3 py-1 text-[0.7rem] font-semibold tracking-wider text-[var(--color-brown)] uppercase"
				>
					Receta brasilera
				</span>
				<h3
					class="mb-4 text-2xl font-medium tracking-tight text-[var(--color-brown)] md:text-3xl"
					style="font-family: var(--font-title);"
				>
					Nuestra chipá es única
				</h3>
				<!-- PLACEHOLDER: reemplazar con descripción final de Pedro y Estefanía -->
				<p class="text-base leading-relaxed text-[var(--color-brown)]/80">
					La hacemos con la receta tradicional brasilera, no la que se conoce acá. Queso de
					verdad, fresca del día. Es nuestro orgullo.
				</p>
			</div>
		</div>

		<!-- Destacados secundarios: Cookies & Café -->
		<div {@attach revealStagger()} class="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
			<div
				data-reveal-item
				class="group rounded-3xl bg-[var(--color-cream)] p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
			>
				<div class="mb-5 aspect-[3/2] w-full overflow-hidden rounded-2xl">
					<!-- Foto: <Figura src="/cookies.jpg" alt="Cookies artesanales" /> -->
					<Figura src="/example-1.webp" alt="Cookies artesanales" gradient="linear-gradient(150deg, #f3c9d2 0%, var(--color-rose-gold) 100%)" />
				</div>
				<h3
					class="mb-2 text-xl font-medium tracking-tight text-[var(--color-brown)]"
					style="font-family: var(--font-title);"
				>
					Cookies
				</h3>
				<p class="text-sm leading-relaxed text-[var(--color-brown)]/75">
					Clásica, marroc, pistachio, nutella. Hechas a mano, una por una.
				</p>
			</div>
			<div
				data-reveal-item
				class="group rounded-3xl bg-[var(--color-cream)] p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
			>
				<div class="mb-5 aspect-[3/2] w-full overflow-hidden rounded-2xl">
					<!-- Foto: <Figura src="/cafe.jpg" alt="Café de especialidad" /> -->
					<Figura src="/expample-2.webp" alt="Café de especialidad" gradient="linear-gradient(150deg, #d8a679 0%, var(--color-brown) 120%)" />
				</div>
				<h3
					class="mb-2 text-xl font-medium tracking-tight text-[var(--color-brown)]"
					style="font-family: var(--font-title);"
				>
					Café de especialidad
				</h3>
				<p class="text-sm leading-relaxed text-[var(--color-brown)]/75">
					El oficio de Pedro en cada taza. Espresso, latte, cappuccino y más.
				</p>
			</div>
		</div>

		<!-- Resto de categorías -->
		<div {@attach revealStagger({ each: 70 })} class="grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each categorias as cat, i}
				<div
					data-reveal-item
					class="flex items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-white-soft)] p-5 transition-all duration-300 hover:border-[var(--color-rose-gold)] hover:shadow-[var(--shadow-soft)]"
				>
					<!-- Foto categoría: <Figura src="/cat-xxx.jpg" alt={cat.nombre} /> -->
					<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
						<Figura
							src={i % 2 === 0 ? '/example-1.webp' : '/expample-2.webp'}
							alt={cat.nombre}
							gradient="linear-gradient(140deg, var(--color-blush) 0%, var(--color-rose-gold) 100%)"
						/>
					</div>
					<div class="min-w-0">
						<div class="mb-1 flex items-center gap-2">
							<h3
								class="text-lg font-medium tracking-tight text-[var(--color-brown)]"
								style="font-family: var(--font-title);"
							>
								{cat.nombre}
							</h3>
							{#if cat.badge}
								<span
									class="rounded-full bg-[var(--color-blush)]/30 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-[var(--color-brown)] uppercase"
								>
									{cat.badge}
								</span>
							{/if}
						</div>
						<p class="text-sm leading-relaxed text-[var(--color-brown)]/75">
							{cat.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
