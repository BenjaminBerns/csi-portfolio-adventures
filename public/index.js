const tl_index = gsap.timeline();

tl_index
    .from('.prenom', {y: 100, duration: 1, opacity: 0}, 0.2)
    .from('.presentations', {y: 100, duration: 1, opacity: 0}, 0.7)
    .from('.hcj', {duration: 0.75, y: '0%', ease: "sine"}, 1.7)
    .from('.bck_img', {duration: 1, opacity: 0}, 0.5)
    .from('.footer', {y: 80, duration: 1.50, ease: "circ"}, 0)