<script>
	// Slot de imagen. Mientras no hay foto, muestra el gradiente de marca como fallback.
	// Para poner la foto real: pasar `src` (y `alt`). El gradiente desaparece solo.
	let {
		src = '',
		alt = '',
		gradient = '',
		eager = false,
		imgClass = 'h-full w-full object-cover'
	} = $props();
</script>

{#if src}
	<img {src} {alt} class={imgClass} loading={eager ? 'eager' : 'lazy'} />
{:else}
	<div class="h-full w-full" style={gradient ? `background: ${gradient};` : ''} role="img" aria-label={alt}></div>
{/if}
