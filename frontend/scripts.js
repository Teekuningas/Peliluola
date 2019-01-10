function fitToContainer(canvas) {
  canvas.style.width='100%';
  canvas.style.height='100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

var c = document.getElementById("main-canvas");
var ctx = c.getContext("2d");

fitToContainer(c);

ctx.fillStyle = "white";
ctx.fillRect(0, 0, c.width, c.height);

ctx.moveTo(0, 0);
ctx.lineTo(c.width, c.height);
ctx.stroke();

