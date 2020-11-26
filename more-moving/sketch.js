let x= 30
let y= 10
let goleft =false; 
let godown =false; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200,200,0);
  circle(x, y, 30);
if(goleft == false){
  x=x+1,5
}
if(x>400) 
{
  goleft =true;
}
if(goleft == true){
  x=x-2
} 
if(x<0)
{
  goleft = false; 
}

if(godown == false){
  y=y+3
}
if(y>400) 
{
  godown =true;
}
if(godown == true){
  y=y-0.5
} 
if(y<0)
{
  godown = false; 
}
}