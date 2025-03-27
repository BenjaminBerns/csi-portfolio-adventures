const tl_projets = gsap.timeline();

tl_projets
    .from('.titrephp', {y: 100, duration: 1, opacity: 0}, 0.5)
    .from('.titreA', {y: 100, duration: 1, opacity: 0}, 0.6)
    .from('.titreC', {y: 100, duration: 1, opacity: 0}, 0.7)
    .from('.st1', {duration: 0.5, opacity: 0}, 1.5)
    .from('.stA', {duration: 0.5, opacity: 0}, 1.6)
    .from('.stC', {duration: 0.5, opacity: 0}, 1.7)
    .from('.description1', {duration: 0.5, opacity: 0}, 2)
    .from('.description2', {duration: 0.5, opacity: 0}, 2.1)
    .from('.description3', {duration: 1, opacity: 0}, 2.2)
    .from('.imgBasket', {duration: 0.5, opacity: 0}, 2.5)
    .from('.imgA', {duration: 0.5, opacity: 0}, 2.6)
    .from('.imgC', {duration: 0.5, opacity: 0}, 2.7)
    .from('.download1', {duration: 0.5, opacity: 0}, 3)