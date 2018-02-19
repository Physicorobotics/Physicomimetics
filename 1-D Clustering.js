var N = 1;
var timeinterval = .05;
var canvas;
var ctx;
var x = 0;
var x2 = 500;

var y = 250;
var WIDTH = 500;
var HEIGHT = 500;
var mass = Math.floor((Math.random() * 25) + 1);
var v = [0, 0];
var v2 = [0, 0];
var timestop = false;
var time = 0;
var buzzed=false;
function grav(r, n, g, m1, m2) {
  var f = g * m1 * m2 * Math.pow(r, n);
  if (r < 10 && r > -10) {
    v[0] = 0;
    v2[0] = 0;
    timestop = true;
  } else {
    if (x > x2) {

      var a1 = f / m1;
      var a2 = f / m2;
      v[0] = v[0] - a1;
      v2[0] = v2[0] + a2;
    } else {
      var a1 = f / m1;
      var a2 = f / m2;
      v[0] = v[0] + a1;
      v2[0] = v2[0] - a2;
    }
  }
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fill();
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}


function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, timeinterval);
}


function draw() {
  var r = x2 - x;

  grav(r, N, 1, 1, 1);
  clear();
  ctx.fillStyle = "#95a5a6";
  ctx.strokeStyle = "black";
  rect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = "#2c3e50";

  x = x + (timeinterval / 1000) * v[0];
  circle(x, y, 10);

  ctx.fillStyle = "#c0392b";


  x2 = x2 + (timeinterval / 1000) * v2[0];

  circle(x2, y, 10);

  $("small").text(v[0] + "," + v2[0]);
  if (!timestop) {
    time += timeinterval;
    $("h3").text(time);
    
  }
  else{
    if(!buzzed){
//       var audio = new Audio('http://www.freesfx.co.uk/rx2/mp3s/5/16877_1461333021.mp3');
// audio.play();
    }
    else{buzzed=true; }
  }
}

init();
