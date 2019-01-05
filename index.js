let radius = 0;
let minRadius = 0;
let maxRadius = 75;
let isPlayingForwards = true;
let drawingColor = 'white';

function startAnimation() {
  window.requestAnimationFrame(update);
}

function getRadius() {
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
  return radius;
}

function draw() {
  const domNode = document.querySelector('#canvas');
  const ctx = domNode.getContext('2d');
  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.fillStyle = drawingColor;
  ctx.strokeStyle = drawingColor;
  ctx.arc(250, 250, getRadius(), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}

function init() {
  document.addEventListener('DOMContentLoaded', startAnimation);
}

init();
