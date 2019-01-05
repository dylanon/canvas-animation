function startAnimation() {
  const radiusGenerator = getRadiusGenerator();
  window.requestAnimationFrame(() => update(radiusGenerator));
}

function* getRadiusGenerator() {
  // Initial state
  let radius = 0;
  let isPlayingForwards = true;
  const minRadius = 0;
  const maxRadius = 75;

  // Loop forever
  while (true) {
    if (radius === maxRadius) {
      isPlayingForwards = false;
      radius = radius - 1;
    } else if (radius === minRadius) {
      isPlayingForwards = true;
      radius = radius + 1;
    } else if (radius < maxRadius && isPlayingForwards) {
      radius = radius + 1;
    } else {
      radius = radius - 1;
    }
    // But each yield blocks the loop so we're good
    yield radius;
  }
}

function drawCircle(radius) {
  const domNode = document.querySelector('#canvas');
  const ctx = domNode.getContext('2d');
  const drawingColor = 'white';
  ctx.fillStyle = drawingColor;
  ctx.strokeStyle = drawingColor;
  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.arc(250, 250, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function update(generator) {
  const nextRadius = generator.next().value;
  drawCircle(nextRadius);
  window.requestAnimationFrame(() => update(generator));
}

function init() {
  document.addEventListener('DOMContentLoaded', startAnimation);
}

init();
