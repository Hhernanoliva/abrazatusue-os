import { animate, stagger } from 'animejs';

const prefersReducedMotion = () =>
	typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

const canHover = () => typeof matchMedia !== 'undefined' && matchMedia('(hover: hover)').matches;

// Reveal de un elemento al entrar en viewport. Solo transform/opacity.
export function reveal({ y = 24, delay = 0, duration = 700 } = {}) {
	return (el: HTMLElement) => {
		if (prefersReducedMotion()) {
			el.style.opacity = '1';
			return;
		}
		el.style.opacity = '0';
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate(el, {
						opacity: [0, 1],
						translateY: [y, 0],
						duration,
						delay,
						ease: 'outCubic'
					});
					io.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		io.observe(el);
		return () => io.disconnect();
	};
}

// Reveal escalonado de hijos (stagger). Children llevan [data-reveal-item].
export function revealStagger({ selector = '[data-reveal-item]', y = 32, each = 80 } = {}) {
	return (el: HTMLElement) => {
		const items = el.querySelectorAll<HTMLElement>(selector);
		if (prefersReducedMotion()) {
			items.forEach((i) => (i.style.opacity = '1'));
			return;
		}
		items.forEach((i) => (i.style.opacity = '0'));
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate(items, {
						opacity: [0, 1],
						translateY: [y, 0],
						duration: 600,
						ease: 'outCubic',
						delay: stagger(each)
					});
					io.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		io.observe(el);
		return () => io.disconnect();
	};
}

// Botón magnético: tira suave hacia el cursor. Solo desktop con hover, respeta reduced-motion.
export function magnetic({ strength = 0.3 } = {}) {
	return (el: HTMLElement) => {
		if (!canHover() || prefersReducedMotion()) return;

		const onMove = (e: MouseEvent) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - (r.left + r.width / 2)) * strength;
			const y = (e.clientY - (r.top + r.height / 2)) * strength;
			el.style.transform = `translate(${x}px, ${y}px)`;
		};
		const onLeave = () => {
			el.style.transform = 'translate(0px, 0px)';
		};

		el.addEventListener('mousemove', onMove);
		el.addEventListener('mouseleave', onLeave);
		return () => {
			el.removeEventListener('mousemove', onMove);
			el.removeEventListener('mouseleave', onLeave);
		};
	};
}
