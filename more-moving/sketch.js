let ballcount =5
let ds= new Array(ballcount);
let ys = new Array(ballcount);
let xs = new Array(ballcount);
let xSpeed = 5
let ySpeed = 3

function setup() {
createCanvas(500,500);

for (let i = 0; i < ballcount; i++) {
ds[i]= random(5,50)
  }

for (let i = 0; i < ballcount; i++) {
  xs[i]= random(0,innerWidth);
  ys[i]= random(0,innerHeight)
  }

}
function draw(){
  background(200);
for (let i = 0; i < ballcount; i++) {
  circle(xs[i],ys[i],ds[i]);
  xs[i]++
  ys[i]++
}
if (xs[i] > width - ds[i] / 2||xs[i] < 0 + ds[i] / 2) {
  xSpeed = -xSpeed;
}

if (ys[i] > height - ds[i] / 2 || ys[i] < 0 + ds[i] / 2) {
  ySpeed = -ySpeed;
}

xs[i] = xs[i] + xSpeed;
ys[i] = ys[i] + ySpeed;
}

