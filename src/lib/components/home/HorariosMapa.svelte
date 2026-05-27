<script lang="ts">
	import { reveal } from '$lib/attachments';

	const dia = new Date().getDay(); // 0=Dom ... 6=Sáb

	const horarios = [
		{ dias: 'Miércoles a Viernes', manana: '9:00 – 12:30', tarde: '16:00 – 19:00', grupo: [3, 4, 5] },
		{ dias: 'Sábados y Domingos', manana: '9:30 – 13:00', tarde: '16:00 – 20:00', grupo: [6, 0] },
		{ dias: 'Lunes y Martes', manana: 'Cerrado', tarde: '', grupo: [1, 2] }
	];
</script>

<section id="horarios" class="relative z-[2] bg-[var(--color-white-soft)] px-6 py-20 md:py-28">
	<div class="mx-auto max-w-6xl">
		<div {@attach reveal()} class="mb-14 text-center">
			<p class="mb-3 text-xs font-semibold tracking-[0.3em] text-[var(--color-gray-warm)] uppercase">
				Dónde encontrarnos
			</p>
			<h2
				class="mb-4 text-3xl font-medium tracking-tight text-[var(--color-brown)] md:text-4xl"
				style="font-family: var(--font-title);"
			>
				Vení a visitarnos
			</h2>
			<p class="mx-auto max-w-xl text-base leading-relaxed text-[var(--color-brown)]/75">
				Te esperamos con un cafecito. Cerramos lunes y martes para descansar y volver con todo.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
			<!-- Horarios -->
			<div {@attach reveal({ delay: 100 })}>
				<h3
					class="mb-6 text-lg font-medium tracking-tight text-[var(--color-brown)]"
					style="font-family: var(--font-title);"
				>
					Horarios de atención
				</h3>

				<div>
					{#each horarios as h}
						{@const esHoy = h.grupo.includes(dia)}
						<div
							class="flex flex-col border-b border-[var(--color-border)] py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between {esHoy
								? 'rounded-xl bg-[var(--color-blush)]/15 px-4'
								: ''}"
						>
							<span class="flex items-center gap-2 text-sm font-semibold text-[var(--color-brown)]">
								{h.dias}
								{#if esHoy}
									<span
										class="rounded-full bg-[var(--color-cta)] px-2 py-0.5 text-[0.6rem] font-bold tracking-wide text-white uppercase"
										>Hoy</span
									>
								{/if}
							</span>
							{#if h.manana === 'Cerrado'}
								<span class="mt-1 text-sm text-[var(--color-gray-warm)] italic sm:mt-0">Cerrado</span>
							{:else}
								<div
									class="mt-1 flex flex-col text-sm text-[var(--color-gray-warm)] sm:mt-0 sm:text-right"
								>
									<span>{h.manana}</span>
									<span>{h.tarde}</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<div class="mt-8 rounded-xl bg-[var(--color-cream)] p-5">
					<p class="mb-1 text-xs tracking-widest text-[var(--color-gray-warm)] uppercase">Dirección</p>
					<p class="text-sm font-semibold text-[var(--color-brown)]">
						Rivadavia 493, Las Flores, Provincia de Buenos Aires
					</p>
				</div>
			</div>

			<!-- Mapa -->
			<div {@attach reveal({ delay: 200 })}>
				<div class="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
					<iframe
						src="https://maps.google.com/maps?q=Rivadavia%20493%2C%20Las%20Flores%2C%20Buenos%20Aires&z=16&output=embed"
						width="100%"
						height="360"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Ubicación de Abraza Tus Sueños en Las Flores"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
