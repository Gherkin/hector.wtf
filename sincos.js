function drawGrid(ctx, x, y) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#c5c4c5";
  ctx.moveTo(x - 125, y + 125);
  ctx.lineTo(x - 125, 0)
  ctx.moveTo(0, y - 125);
  ctx.lineTo(x + 125, y - 125);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#e6e6e6";
  ctx.moveTo(0, y - 100);
  ctx.lineTo(x + 125, y - 100);
  ctx.moveTo(0, y);
  ctx.lineTo(x + 125, y);
  ctx.moveTo(0, y + 100);
  ctx.lineTo(x + 125, y + 100);

  ctx.moveTo(x - 100, y - 125);
  ctx.lineTo(x - 100, y + 125);
  ctx.moveTo(x, y - 125);
  ctx.lineTo(x, y + 125);
  ctx.moveTo(x + 100, y - 125);
  ctx.lineTo(x + 100, y + 125);
  ctx.stroke();
}

function drawCircle(ctx, x, y) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1cc70b";
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawCenter(ctx, x, y, angle) {
  ctx.beginPath();
  ctx.strokeStyle = "#fd9b0d";
  ctx.fillStyle = "#fff1a3";
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y);
  ctx.arc(x, y, 20, 0, angle, true);
  ctx.lineTo(x, y);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#fd9b0d";
  ctx.fillStyle = "#fd9b0d";
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawPoint(ctx, cx, cy, angle) {
  x = cx + 100 * Math.cos(angle);
  y = cy + 100 * Math.sin(angle);
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1cc70b";
  ctx.fillStyle = "#1cc70b";
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.moveTo(x, y);
  ctx.lineWidth = 1;
  ctx.lineTo(cx + 20 * Math.cos(angle), cy + 20 * Math.sin(angle));
  ctx.stroke();
}

function drawSinePoint(ctx, cx, cy, angle) {
  x = cx + 100 * Math.cos(angle);
  y = cy + 100 * Math.sin(angle);

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#fed3d4";
  ctx.moveTo(x, y);
  ctx.lineTo(cx - 125, y);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "#fb0006";
  ctx.arc(cx - 125, y, 3, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSineGrid(ctx, x, y, angle) {
  var px = x - 125;
  var py = y + 100 * Math.sin(angle);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#e6e6e6";
  for (var kx = Math.PI / 2 - (Math.PI * 2 + angle) % (Math.PI / 2); px - kx * 100 > 0; kx += Math.PI / 2) {
    ctx.beginPath();
    ctx.moveTo(px - kx * 100, y - 100);
    ctx.lineTo(px - kx * 100, y + 100);
    ctx.stroke();

  }
}

function drawSine(ctx, x, y, angle) {
  drawSinePoint(ctx, x, y, angle);
  drawSineGrid(ctx, x, y, angle);

  ctx.fillStyle = "#fb0006";
  ctx.font = '18px sans-serif';
  ctx.fillText('sin', 10, y - 105);
  ctx.fillStyle = "#fd9b0d";
  ctx.font = 'italic 18px sans-serif';
  ctx.fillText('θ', 45, y - 105);
  ctx.fillStyle = "#fb0006";
  ctx.font = '18px sans-serif';
  ctx.fillText('= ' + -1 * Math.sin(angle).toFixed(2), 60, y - 105);

  var px = x - 125;
  var py = y + 100 * Math.sin(angle);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#fb0006";
  ctx.beginPath();
  ctx.moveTo(px, py);
  for (var kx = 0; px - kx > 0; kx += 1) {
    ky = Math.sin(angle + kx * 0.01);
    ctx.lineTo(px - kx, y + ky * 100);
  }
  ctx.stroke();
}

function drawCosinePoint(ctx, cx, cy, angle) {
  var x = cx + 100 * Math.cos(angle);
  var y = cy + 100 * Math.sin(angle);

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#a09dfe";
  ctx.moveTo(x, y);
  ctx.lineTo(x, cy - 125);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "#0000ff";
  ctx.arc(x, cy - 125, 3, 0, 2 * Math.PI);
  ctx.fill();

  //Arc
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#a09dfe";
  ctx.arc(cx - 125, cy - 125, x - (cx - 125), 0, Math.PI * 2 - Math.PI / 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "#0000ff";
  ctx.arc(cx - 125, cy - 125 - (x - (cx - 125)), 3, 0, 2 * Math.PI);
  ctx.fill();
}

function drawCosineGrid(ctx, x, y, angle) {
  var px = x - 125;
  var py = y + 100 * Math.sin(angle);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#e6e6e6";

  ctx.beginPath();
  ctx.moveTo(0, y - 350);
  ctx.lineTo(x - 125, y - 350);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, y - 150);
  ctx.lineTo(x - 125, y - 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, y - 250);
  ctx.lineTo(x - 125, y - 250);
  ctx.stroke();
  for (var kx = Math.PI / 2 - (Math.PI * 2 + angle) % (Math.PI / 2); px - kx * 100 > 0; kx += Math.PI / 2) {
    ctx.beginPath();
    ctx.moveTo(px - kx * 100, y - 350);
    ctx.lineTo(px - kx * 100, y - 150);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x - 125, y - 125, 25, 0, Math.PI * 2 - Math.PI / 2, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x - 125, y - 125, 125, 0, Math.PI * 2 - Math.PI / 2, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x - 125, y - 125, 225, 0, Math.PI * 2 - Math.PI / 2, true);
  ctx.stroke();

}

function drawCosine(ctx, x, y, angle) {
  drawCosineGrid(ctx, x, y, angle);
  drawCosinePoint(ctx, x, y, angle);

  ctx.fillStyle = "#0000ff";
  ctx.font = '18px sans-serif';
  ctx.fillText('cos', 10, y - 355);
  ctx.fillStyle = "#fd9b0d";
  ctx.font = 'italic 18px sans-serif';
  ctx.fillText('θ', 45, y - 355);
  ctx.fillStyle = "#0000ff";
  ctx.font = '18px sans-serif';
  ctx.fillText('= ' + Math.cos(angle).toFixed(2), 60, y - 355);

  var px = x - 125;
  var py = y - 125 - (x + 100 * Math.cos(angle) - (x - 125))

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#0000ff";
  ctx.beginPath();
  ctx.moveTo(px, py);
  for (var kx = 0; px - kx > 0; kx += 1) {
    ky = Math.cos(angle + kx * 0.01);
    ctx.lineTo(px - kx, y + -1 * ky * 100 - 250);
  }
  ctx.stroke();
}


var currentAngle = 0;

function render() {
  sx = 500;
  sy = 500;
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.width;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0.5, 0.5);


  currentAngle = revolve(currentAngle)
  ctx.fillStyle = "#fd9b0d";
  ctx.font = 'italic 18px sans-serif';
  ctx.fillText('θ = ', sx + 50, sy - 355);
  mult = -1 * (currentAngle / Math.PI).toFixed(2)

  ctx.fillText(mult + ' * π', sx + 80, sy - 355);

  drawGrid(ctx, sx, sy);
  drawCenter(ctx, sx, sy, currentAngle);
  drawSine(ctx, sx, sy, currentAngle);
  drawCosine(ctx, sx, sy, currentAngle);
  drawCircle(ctx, sx, sy);
  drawPoint(ctx, sx, sy, currentAngle);
}

function revolve(angle) {
  angle -= Math.PI * 0.02;

  return angle < 0 - 2 * Math.PI ? angle + 2 * Math.PI : angle;
}

mouseDown = false;
setInterval(() => {
  if (mouseDown) return;
  render()
}, 60);

function getAngle(x1, y1, x2, y2) {
  var distY = Math.abs(y2 - y1); //opposite
  var distX = Math.abs(x2 - x1); //adjacent
  var dist = Math.sqrt((distY * distY) + (distX * distX)); //hypotenuse, 
  //don't know if there is a built in JS function to do the square of a number
  var val = distY / dist;
  var aSine = Math.asin(val);
  return aSine; //return angle in degrees
}

function mouseMoved(e) {
  if (!mouseDown) return;

  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var center = {
    x: 500,
    y: 500
  }
  var dx = x - center.x;
  var dy = y - center.y;
  currentAngle = Math.atan2(dy, dx);
  currentAngle = currentAngle > 0 ?
    currentAngle - Math.PI * 2 :
    currentAngle

  render(currentAngle);
}

var canvas = document.getElementById("canvas");
canvas.addEventListener('mousedown', e => mouseDown = true);
canvas.addEventListener('mousemove', mouseMoved);
document.addEventListener('mouseup', e => mouseDown = false);

