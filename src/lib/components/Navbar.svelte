<script>
	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Inicio' },
		{ href: '/menu', label: 'Menú' }
	];
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-[var(--color-white-soft)] border-b border-[var(--color-blush)]/30" style="transform: translateZ(0); will-change: transform;">
	<nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center">
			<!-- Reemplazar con <img src="/logo.svg" alt="Abraza Tus Sueños" class="h-10" /> cuando llegue el logo -->
			<span
				class="text-xl font-bold tracking-widest uppercase text-[var(--color-brown)]"
				style="font-family: var(--font-body);"
			>
				Abraza Tus Sueños
			</span>
		</a>

		<!-- Links desktop -->
		<ul class="hidden md:flex items-center gap-8">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-semibold tracking-widest uppercase text-[var(--color-brown)] hover:text-[var(--color-ocre)] transition-colors duration-200"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger mobile -->
		<button
			class="md:hidden flex flex-col gap-1.5 p-2"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Abrir menú"
		>
			<span class="block w-6 h-0.5 bg-[var(--color-brown)] transition-all duration-200"></span>
			<span class="block w-6 h-0.5 bg-[var(--color-brown)] transition-all duration-200"></span>
			<span class="block w-6 h-0.5 bg-[var(--color-brown)] transition-all duration-200"></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden bg-[var(--color-white-soft)] border-t border-[var(--color-blush)]/30 px-6 py-4">
			<ul class="flex flex-col gap-4">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={() => (menuOpen = false)}
							class="block text-sm font-semibold tracking-widest uppercase text-[var(--color-brown)] hover:text-[var(--color-ocre)] transition-colors duration-200"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
