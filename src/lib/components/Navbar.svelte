<script>
	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Inicio' },
		{ href: '/menu', label: 'Menú' }
	];
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-white-soft)]"
	style="transform: translateZ(0);"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center transition-transform duration-200 active:scale-[0.97]">
			<!-- TODO: <img src="/logo.svg" alt="Abraza Tus Sueños" class="h-9" /> cuando llegue el logo en SVG -->
			<span class="text-lg font-bold tracking-[0.18em] text-[var(--color-brown)] uppercase">
				Abraza Tus Sueños
			</span>
		</a>

		<!-- Links desktop -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="inline-flex items-center py-2 text-sm font-semibold tracking-widest text-[var(--color-brown)] uppercase transition-colors duration-200 hover:text-[var(--color-cta)]"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger mobile -->
		<button
			class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={menuOpen}
		>
			<span
				class="block h-0.5 w-6 bg-[var(--color-brown)] transition-all duration-300 {menuOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-[var(--color-brown)] transition-all duration-300 {menuOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-[var(--color-brown)] transition-all duration-300 {menuOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="border-t border-[var(--color-border)] bg-[var(--color-white-soft)] px-6 py-4 md:hidden">
			<ul class="flex flex-col gap-4">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={() => (menuOpen = false)}
							class="block py-2 text-sm font-semibold tracking-widest text-[var(--color-brown)] uppercase transition-colors duration-200 hover:text-[var(--color-cta)]"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
