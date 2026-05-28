<script lang="ts">
	import { reveal } from '$lib/attachments';
	import Figura from '$lib/components/Figura.svelte';
</script>

<section id="nosotros" class="relative z-[2] bg-[var(--color-cream)] px-6 py-20 md:py-28">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
			<!-- Foto pareja — reemplazar con foto real -->
			<div {@attach reveal({ y: 0, duration: 800 })} class="order-1">
				<!-- Foto real: <Figura src="/duenos.jpg" alt="Estefanía y Pedro, dueños de Abraza Tus Sueños" /> -->
				<div class="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] md:aspect-[4/4.4]">
					<Figura
						src="/example-1.webp"
						alt="Estefanía y Pedro, dueños de Abraza Tus Sueños"
						gradient="radial-gradient(90% 70% at 30% 25%, var(--color-blush) 0%, transparent 55%), radial-gradient(90% 80% at 75% 80%, var(--color-rose-gold) 0%, transparent 55%), linear-gradient(160deg, #fbe7df 0%, #ead4c2 100%)"
					/>
				</div>
			</div>

			<!-- Historia -->
			<div {@attach reveal({ y: 28, delay: 150 })} class="order-2">
				<p
					class="mb-4 text-xs font-semibold tracking-[0.3em] text-[var(--color-gray-warm)] uppercase"
				>
					Quiénes somos
				</p>
				<h2
					class="mb-7 text-3xl leading-tight font-medium tracking-tight text-[var(--color-brown)] md:text-4xl"
					style="font-family: var(--font-title);"
				>
					Dos culturas, un mismo sueño
				</h2>

				<div class="space-y-5 text-base leading-relaxed text-[var(--color-brown)]/85">
					<p>
						Somos Estefanía y Pedro, una pastelera argentina y un cocinero brasilero. Nos une el
						amor por lo casero, por el buen café y por hacer las cosas de verdad. En la pandemia
						decidimos juntar nuestras dos profesiones —y nuestros dos países— en una sola cocina.
					</p>
					<p>
						De esa unión nacen recetas que no vas a encontrar en otro lado. La chipá es el ejemplo
						más claro: tradición brasilera con cariño argentino.
					</p>
					<p>
						Le pusimos Abraza Tus Sueños para no olvidarnos nunca de a lo que estamos agarrados:
						este sueño de emprender, de cocinar para la gente, de que cada uno que entra se sienta
						como en casa.
					</p>
					<p>
						Se hace todo acá. Los dueños te atienden de miércoles a domingo.
					</p>
				</div>

				<p
					class="mt-8 text-3xl text-[var(--color-rose-gold)]"
					style="font-family: var(--font-brand);"
				>
					Estefanía y Pedro
				</p>
			</div>
		</div>
	</div>
</section>
