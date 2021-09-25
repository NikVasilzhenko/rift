//const animHero = lottie;

const heroAnimation = lottie.loadAnimation({
  container: document.querySelector('#js-animate-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/s11.json'
});
const appAnimation1 = lottie.loadAnimation({
  container: document.querySelector('#js-animate-app-1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/s2.json'
});
const appAnimation2 = lottie.loadAnimation({
  container: document.querySelector('#js-animate-app-2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/s4.json'
});
const appAnimation3 = lottie.loadAnimation({
  container: document.querySelector('#js-animate-app-3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/s5.json'
});
const appAnimation4 = lottie.loadAnimation({
  container: document.querySelector('#js-animate-app-4'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './animations/s1.json'
});