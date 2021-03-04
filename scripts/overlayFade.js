let scrollBefore = 0;
let opacityValue = 1;
const overlay = document.querySelector(".overlay");

document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const fadeOutFactor = 0.025;
    const fadeInFactor = 0.0125;

    opacityValue = scrolled > scrollBefore ? opacityValue - fadeOutFactor : opacityValue + fadeInFactor;
    opacityValue = opacityValue < 0 ? 0 : opacityValue;
    opacityValue = opacityValue > 1 || window.scrollY < 60 ? 1 : opacityValue;
    setOverlayOpacity(overlay, opacityValue);

    scrollBefore = scrolled;
});

function setOverlayOpacity(overlayElement, value) {
    overlayElement.style.setProperty("--fade-background", `rgba(90, 69, 255, ${value})`);
}