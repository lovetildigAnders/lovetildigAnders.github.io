let ballcount =5
let ds= new Array(ballcount);
let y = new Array(ballcount);
let x = new Array(ballcount);
let vx = 5
let vy = 3

function setup() {
createCanvas(500,500);

for (let i = 0; i < ballcount; i++) {
ds[i]= random(5,50)
  }

for (let i = 0; i < ballcount; i++) {
  x[i]= random(0,innerWidth);
  y[i]= random(0,innerHeight)
  }

}
function draw() {
background(1);
fill(255)
for (i = 0; i < ballcount; i++) {
circle(x[i], y[i], ds[i]);
x[i] += vx[i];
y[i] += vy[i];
if (x[i] > width - ds[i]) {
vx[i] = -vx[i];
}
if (x[i] < ds[i]) {
vx[i] = -vx[i];
}
if (y[i] > height - ds[i]) {
vy[i] = -vy[i];
}
if (y[i] < ds[i]) {
 vy[i] = -vy[i];
}
}
}

