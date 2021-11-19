const flySwatter = document.getElementById("flyswatter");

document.addEventListener("mousemove", function(e) {
    flySwatter.style.top = `${e.clientY}px`;
    flySwatter.style.left = `${e.clientX}px`;
})


// function updateFlySwatter() {
//     requestAnimationFrame(updateFlySwatter);
// }
// requestAnimationFrame(updateFlySwatter);