import type Lenis from 'lenis';

// Holder del instance de Lenis para hacer scroll suave a anclas desde cualquier componente.
export const scroll = $state<{ lenis: Lenis | null }>({ lenis: null });

export function scrollToId(id: string, offset = -72) {
	if (scroll.lenis) {
		scroll.lenis.scrollTo(id, { offset });
	} else {
		document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
	}
}
