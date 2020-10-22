let x= 30
let y= 30
let goleft =false; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200,200,0);
  circle(x, y, 30);
if(goleft == false){
  x=x+1
}
if(x>400) 
{
  goleft =true;
}
if(goleft == true){
  x=x-1
} 
if(x<0)
goleft =flase; 
}