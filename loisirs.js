const tl_loisirs = gsap.timeline();

tl_loisirs
    .staggerFrom('h1 span', 0.8 ,{y: -50, opacity: 0, ease: "power2.out", stagger: 0.05}, 0.2)
    .from('.img_r', {y:100, x:100, height: 0, width: 0, duration: 2, ease:"elastic"}, 1.6)
    .from('.prog', {y:100, x:100, height: 0, width: 0, duration: 2, ease:"elastic"}, 1.8)
    .from('.music', {y:100, x:100, height: 0, width: 0, duration: 2, ease:"elastic"}, 2)
    .from('.Rubiks',1 ,{x:-100, opacity:0}, 0.8)
    .from('.developement',1 ,{x:-100, opacity:0}, 1)
    .from('.musique',1 ,{x:-100, opacity:0}, 1.2)
    .staggerFrom('.div_fleche .fleche', 2,{y: -100, opacity: 0, ease: "back",
        stagger: {
            each: 0.15,
            from: "center"
        }}, 3.4)