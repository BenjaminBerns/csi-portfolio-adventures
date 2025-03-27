const tl_competences = gsap.timeline();

tl_competences
    .from('.bureau', {opacity: 0, duration: 1}, 0)
    .from('.dev', {opacity: 0, duration: 1}, 0.4)
    .from('.bdd', {opacity: 0, duration: 1}, 0.8)
    .from('.outils_dev', {opacity: 0, duration: 1}, 1.2)
    .from('.footer', {y: 80, duration: 1.50, ease: "circ"}, 0)
