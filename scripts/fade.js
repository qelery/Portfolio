let scrollBefore = 0;
let overlayOpacity = 0.9;
const overlay = document.querySelector(".overlay");

document.addEventListener('scroll', e => {
    const scrolled = window.scrollY;
    if (scrolled > scrollBefore && overlayOpacity > 0) {
        overlayOpacity -= 0.025;
        overlay.style.setProperty("--fade-background", `rgba(90, 69, 255, ${overlayOpacity})`);
    } else if (overlayOpacity < 1) {
        overlayOpacity += 0.05;
        overlay.style.setProperty("--fade-background", `rgba(90, 69, 255, ${overlayOpacity})`);
    }
    if (overlayOpacity < 0) {
        overlayOpacity = 0;
    } else if (overlayOpacity > 1) {
        overlayOpacity = 1;
    }
    console.log(overlayOpacity);
    scrollBefore = scrolled;
});



function fadeOverlay() {
    const scrolled = window.scrollY;

    if (scrollBefore > scrolled) {
        console.log("HERE");
        overlay.style.setProperty("--fade-background", `rgba(90, 69, 255, ${overlayOpacity})`);
        overlay.opacity--;
    }
    scrollBefore = scrolled
}

