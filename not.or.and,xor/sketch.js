let gg= 30
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
  background (400,400);

let x = mouseX;
let y = mouseY;

line (0,200,400,200,)
line (200,0,200,400)
if (y<200 && x<200){
  fill(255,0,0)
  circle (x,y,50);
} else {
    fill(240,255,0 )
    rect(x,y,30)
  }
  if(y>200 && x>200 ) {
    fill(0,255,0 )
    rect(x,y,10)
    line (0,200,400,200)
    line (200,0,200,400)
  
  }
}
