function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(700, 700);
  angleMode(DEGREES); //0-360
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);

  background("black");

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sc = second();

  noFill();
  strokeWeight(7);
  //sec arc
  stroke("#5e60ce");
  let secondangle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 500, 500, 0, secondangle);

  push();
  rotate(secondangle);
  stroke("#5e60ce");
  line(0, 0, 120, 0);
  pop();
  //sec arc
  //min arc
  stroke("#76c893");
  let minangel = map(min, 0, 60, 0, 360);
  arc(0, 0, 450, 450, 0, minangel);

  push();
  rotate(minangel);
  stroke("#76c893");
  line(0, 0, 150, 0);
  pop();
  //min arc
  //hr arc
  stroke("#4ea8de");
  let hrangel = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 400, 400, 0, hrangel);

  push();
  rotate(hrangel);
  stroke("#4ea8de");
  line(0, 0, 100, 0);
  pop();
  //my bear
  push();
  fill("#ffcad4");
  stroke("#f4acb7");
  strokeWeight(7);
  ellipse(13, -13, 10, 10);
  pop();

  push();
  fill("#ffcad4");
  stroke("#f4acb7");
  strokeWeight(7);
  ellipse(13, 13, 10, 10);
  pop();

  push();
  stroke("#ff0a54");
  fill("#ff0a54");
  strokeWeight(25);
  point(0, 0);
  pop();

  push();
  stroke("#ffccd5");
  fill("#ffccd5");
  strokeWeight(35);
  point(0, 0);
  pop();

  stroke("black");
  strokeWeight(5);
  point(4, 8);

  push();
  stroke("black");
  strokeWeight(5);
  point(4, -8);
  //hr arc
  pop();

  push();
  stroke("#ff477e");
  ellipse(-4, 0, 2, 5);
  pop();
}
