<script lang="ts">
	import { animate } from 'animejs';

	const horarios = [
		{ dias: 'Miércoles a Viernes', manana: '9:00 – 12:30', tarde: '16:00 – 19:00' },
		{ dias: 'Sábados y Domingos', manana: '9:30 – 13:00', tarde: '16:00 – 20:00' },
		{ dias: 'Lunes y Martes', manana: 'Cerrado', tarde: 'Cerrado' }
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
</script>

<section class="py-20 px-6 bg-[var(--color-white-soft)]">
	<div class="max-w-6xl mx-auto">
		<!-- Título -->
		<div {@attach fadeUp} class="text-center mb-14">
			<p class="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gray-warm)] mb-3">
				Dónde encontrarnos
			</p>
			<h2
				class="text-3xl md:text-4xl text-[var(--color-brown)]"
				style="font-family: var(--font-title);"
			>
				Vení a visitarnos
			</h2>
		</div>

		<div class="flex flex-col md:flex-row gap-12">
			<!-- Horarios -->
			<div {@attach fadeUp} class="w-full md:w-1/2" style="opacity: 0;">
				<h3
					class="text-lg font-semibold text-[var(--color-brown)] mb-6 tracking-wide"
					style="font-family: var(--font-title);"
				>
					Horarios de atención
				</h3>

				<div class="space-y-4">
					{#each horarios as h}
						<div
							class="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-[var(--color-blush)]/40 last:border-0"
						>
							<span class="font-semibold text-[var(--color-brown)] text-sm">{h.dias}</span>
							{#if h.manana === 'Cerrado'}
								<span class="text-[var(--color-gray-warm)] text-sm italic mt-1 sm:mt-0">
									Cerrado
								</span>
							{:else}
								<div class="flex flex-col text-sm text-[var(--color-gray-warm)] mt-1 sm:mt-0 sm:text-right">
									<span>{h.manana}</span>
									<span>{h.tarde}</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<div class="mt-8 p-4 rounded-xl bg-[var(--color-cream)]">
					<p class="text-xs text-[var(--color-gray-warm)] uppercase tracking-widest mb-1">
						Dirección
					</p>
					<!-- Reemplazar con dirección exacta cuando el cliente la provea -->
					<p class="text-sm font-semibold text-[var(--color-brown)]">
						Las Flores, Buenos Aires, Argentina
					</p>
				</div>
			</div>

			<!-- Mapa -->
			<div {@attach fadeUp} class="w-full md:w-1/2" style="opacity: 0;">
				<div class="rounded-2xl overflow-hidden shadow-sm">
					<!--
						Reemplazar src con el embed exacto del local cuando tengamos la dirección.
						Este embed muestra Las Flores, Buenos Aires como placeholder.
					-->
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52466.5!2d-59.1006!3d-36.0147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9d44f0b2a7e83%3A0x408ab2ae4bb21f0!2sLas%20Flores%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716000000000!5m2!1ses!2sar"
						width="100%"
						height="350"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Ubicación Abraza Tus Sueños"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
