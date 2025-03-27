var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];

//initially colorize each box and position in a row
gsap.set(".box", {
    x: (i) => i * 200
});


gsap.to(".box", {
    duration: 20,
    ease: "none",
    x: "+=2000", //move each box to the right
    modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 2000) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
});


//toggle overflow
const overflow = document.querySelector("#overflow");
overflow.addEventListener("change", applyOverflow);

function applyOverflow() {
    if(overflow.checked) {
        gsap.set(".wrapper", {overflow: "visible"});
    } else {
        gsap.set(".wrapper", {overflow: "hidden"});
    }
}