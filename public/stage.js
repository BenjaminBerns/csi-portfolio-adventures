const tl_stage = gsap.timeline();

tl_stage
    .from('.title', {y: 100, duration: 1, opacity: 0}, 0.5)
    .from('.rapport', {x: 100, duration: 0.5, opacity: 0}, 1.5)
    .from('.annexe1', {x: 100, duration: 0.5, opacity: 0}, 1.6)
    .from('.annexe2', {x: 100, duration: 0.5, opacity: 0}, 1.7)
    .from('.title2', {y: 100, duration: 1, opacity: 0}, 0.5)
    .from('.rapport2', {x: 100, duration: 0.5, opacity: 0}, 1.5)
    .from('.annexe3', {x: 100, duration: 0.5, opacity: 0}, 1.6)
    .from('.imgGl', {duration: 0.5, opacity: 0}, 2.2)
    .from('.imgD', {duration: 0.5, opacity: 0}, 2.2)