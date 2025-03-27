const tl_formations = gsap.timeline();

tl_formations
    .from('table', {y: -50,opacity: -1, duration: 2, ease:"circ"}, 0)
    .from('.footer', {y: 80, duration: 1.50, ease: "circ"}, 0)
