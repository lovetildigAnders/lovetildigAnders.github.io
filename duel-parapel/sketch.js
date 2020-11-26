function setup() {
  createCanvas (400, 400);
  slider = createSlider(2, 50, 2);
  slider.position(windowWidth/2-180,200 );
  slider.style('width', '70px');
}
let ay = 400
let ax = 50
let by = 50
let bx = 200
let cy = 400
let cx = 350
let diameter = 3
function draw() {
  let n = slider.value();
  background(255);
  line(ax, ay, bx, by)
  line(bx, by, cx, cy)
  for (i = 0; i <= n; i++) {
      let x1 = map(i, 0, n, cx, bx)
      let y1 = map(i, 0, n, cy, by)
      let x2 = map(i, 0, n, bx, ax)
      let y2 = map(i, 0, n, by, ay)
      circle(x1, y1, diameter)
      circle(x2, y2, diameter)
      line(x1,y1,x2,y2)
  }
}