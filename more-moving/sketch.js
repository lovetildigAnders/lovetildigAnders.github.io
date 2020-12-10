const ballcount =15
let ds = new Array(ballcount);
let x = new Array(ballcount);
let y = new Array(ballcount);
let xspeed = new Array(ballcount);
let yspeed = new Array(ballcount);

function setup() {
createCanvas(500, 400);    
    for (let i = 0; i < ballcount; i++) {
        ds[i] = random(5, 20)
        x[i] = random(ds[i], width - ds[i]);
        y[i] = random(ds[i], height - ds[i]);
        xspeed[i] = random(-10,10)
        yspeed[i] = random(-10,10)
    }
}
function draw() {
    background(1);
    for (i = 0; i < ballcount; i++) {
        circle(x[i], y[i], ds[i]);
        x[i] += xspeed[i];
        y[i] += yspeed[i];
        if (x[i] > width - ds[i]) {
            xspeed[i] = -xspeed[i];
        }
        if (x[i] < ds[i]) {
            xspeed[i] = -xspeed[i];
        }
        if (y[i] > height - ds[i]) {
            yspeed[i] = -yspeed[i];
        }
        if (y[i] < ds[i]) {
            yspeed[i] = -yspeed[i];
        }
    }
}