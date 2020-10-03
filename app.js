const logo = document.querySelector('#dvdLogo');
const randomHue = () => Math.random() * 255;

const state = {
  color: randomHue(),
  position: {
    x: (window.innerWidth / 2) - (logo.clientWidth / 2),
    y: (window.innerHeight / 2) - (logo.clientHeight / 2),
  },
  movement: {
    x: -1,
    y: 1,
  }
}

function drawLogo() {
  logo.style.top = state.position.y + 'px';
  logo.style.left = state.position.x + 'px';
  logo.querySelectorAll('path').forEach(path => {
    path.setAttribute('fill', `hsl(${state.color}, 100%, 50%)`);
  });
}

function randomizeColor() {
  state.color = randomHue();
}

function updatePosition() {
  state.position.x += (state.movement.x * 4) ;
  state.position.y += (state.movement.y * 4);
}

function hitDetection() {
  // collision detection - left and right
  if (state.position.x + logo.clientWidth >= window.innerWidth) {
    randomizeColor();
    state.movement.x = -state.movement.x;
  } else if (state.position.x <= 0) {
    randomizeColor();
    state.movement.x = -state.movement.x;
  } 
  // collision detection - top and bottom
  if (state.position.y + logo.clientHeight >= window.innerHeight) {
    randomizeColor();
    state.movement.y = -state.movement.y;
  } else if (state.position.y <= 0) {
    randomizeColor();
    state.movement.y = -state.movement.y;
  }
}

function loop() {
  drawLogo();
  updatePosition();
  hitDetection();
  requestAnimationFrame(() => loop());
}

loop();