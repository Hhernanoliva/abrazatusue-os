<script lang="ts">
	import { animate } from 'animejs';

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
	const fadeLeft = (el) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate(el, {
						opacity: [0, 1],
						translateX: [-30, 0],
						duration: 800,
						ease: 'outCubic',
						delay: 200
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
	const fadeRight = (el) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate(el, {
						opacity: [0, 1],
						translateX: [30, 0],
						duration: 800,
						ease: 'outCubic',
						delay: 300
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	};
</script>

<section class="py-20 px-6 bg-[var(--color-cream)]">
	<div class="max-w-6xl mx-auto">
		<!-- Título -->
		<div {@attach fadeUp} class="text-center mb-14">
			<p class="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gray-warm)] mb-3">
				Quiénes somos
			</p>
			<h2
				class="text-3xl md:text-4xl text-[var(--color-brown)]"
				style="font-family: var(--font-title);"
			>
				Un pedacito de Las Flores
			</h2>
		</div>

		<div class="flex flex-col md:flex-row items-center gap-12">
			<!-- Foto dueños (placeholder) -->
			<div
				{@attach fadeLeft}
				class="w-full md:w-1/2"
				style="opacity: 0;"
			>
				<!-- Reemplazar con <img src="/foto-duenos.jpg" alt="Los dueños de Abraza Tus Sueños" class="w-full rounded-2xl" /> -->
				<div
					class="w-full aspect-[4/3] rounded-2xl bg-[var(--color-blush)]/40 flex items-center justify-center"
				>
					<p class="text-sm text-[var(--color-gray-warm)] tracking-wide">
						📸 Foto de los dueños
					</p>
				</div>
			</div>

			<!-- Texto -->
			<div
				{@attach fadeRight}
				class="w-full md:w-1/2 text-center md:text-left"
				style="opacity: 0;"
			>
				<p
					class="text-2xl md:text-3xl text-[var(--color-brown)] mb-6 leading-relaxed"
					style="font-family: var(--font-brand);"
				>
					Hecho con amor, desde Las Flores
				</p>
				<p class="text-base text-[var(--color-brown)] leading-relaxed mb-4 opacity-80">
					<!-- Placeholder copy: reemplazar con historia real de los dueños -->
					Somos [nombres], y hace [X años] decidimos abrir las puertas de Abraza Tus Sueños
					para compartir lo que más nos apasiona: la pastelería artesanal hecha con ingredientes
					reales y mucho cariño.
				</p>
				<p class="text-base text-[var(--color-brown)] leading-relaxed opacity-80">
					Cada tarta, cada cookie, cada café — los preparamos pensando en vos. Porque acá
					no hay atajos, solo dedicación y amor por lo que hacemos.
				</p>
			</div>
		</div>
	</div>
</section>
