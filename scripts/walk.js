let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let spriteSheet = new Image();
let frameWidth = 100; // Bredde af hvert billede i spritesheetet
let frameHeight = 172; // Højde af hvert billede i spritesheetet
let frameCount = 8; // Antal billeder i spritesheetet
let currentFrame = 0; // Aktuelt rammeindeks
let scrollTop = 0; // Scrolltop-værdi

spriteSheet.src = "assets/img/walkGuy.png"; // Sti til dit spritesheet-billede

window.addEventListener("scroll", animateSprite);
window.addEventListener("load", animateSprite); // Kald animateSprite manuelt når siden er indlæst

function animateSprite() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  currentFrame = Math.floor(scrollTop / frameHeight) % frameCount; // Beregn det aktuelle rammeindeks

  // Ryd canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tegn den aktuelle ramme fra spritesheetet
  ctx.drawImage(
    spriteSheet,
    0,
    currentFrame * frameHeight,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth,
    frameHeight
  );

  // Gentag animationen
  requestAnimationFrame(animateSprite);
}
