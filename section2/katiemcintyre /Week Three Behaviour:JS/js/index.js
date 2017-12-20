var letters = [
  "W", "A", "V", "Y",

 
];

var positions = [
  [-80, -40], [-40, -40], [0, -40], [40, -40], [80, -40],
  [-140, 10], [-100, 10], [-60, 10], [-20, 10], [20, 10], [60, 10], [100, 10], [140, 10],
  [-80, 60], [-40, 60], [0, 60], [40, 60], [80, 60]
];

var swirlers = [];

var scaleFactor = 2;
var expectedWidth = 336;
var expectedHeight = 170;

function Swirler(x, y, angle){
  this.x = x;
  this.y = y;
  this.speed = random()*10 + 2;
  this.angle = angle;
  this.angleMod = random()*.2;
  this.hue = random()*360;
  this.size = 0;
}

Swirler.prototype.tick = function(){
  this.x += Math.cos(this.angle)*this.speed;
  this.y += Math.sin(this.angle)*this.speed;
  this.angle += this.angleMod;
  if (random() < .1) this.angleMod *= -1;
  this.size += .2;
  this.speed *= .96;
}

Swirler.prototype.render = function(){
  fill(this.hue, 100, 200, 200);
  ellipse(this.x, this.y, this.size);
}

function setup(){
  createCanvas();
  colorMode(HSB, 360, 200, 100, 100);
  ellipseMode(CENTER);
  blendMode(ADD);
  textAlign(CENTER, CENTER);
  textSize(50);
  noStroke();
  windowResized();
}

function draw(){
  
  var f = frameCount/(150*PI*2);
  f -= floor(f);
  f = 4*pow(f - .2, 3); 
  
  if (f > -.0005 && f < .004){
    for (var i = 0; i < 2; i++){
      var angle = random()*PI*2;
      var x = cos(angle)*100;
      var y = sin(angle)*100;
      swirlers.push(new Swirler(x, y, angle));
    }
  } else {
    swirlers = [];
    clear();
    background(0);
    fill(0, 0, 100, 10);
  }
  
  translate(width/2, height/2);
  scale(scaleFactor);
  
  
  
  for (var i = 0; i < 10; i++){
    for (var j = 0; j < 2; j++){
      fill(i*36, 100, 100, 10);
    
      for (var k = 0; k < letters.length; k++){
        var l = letters[k];
        var x = positions[k][0];
        var y = positions[k][1];
        push();
        translate(x, y);
        rotate(f*i*PI*2);
        text(l, 0, 0);
        pop();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  
  if (width/height > expectedWidth/expectedHeight){
    scaleFactor = height/expectedHeight;
  } else {
    scaleFactor = width/expectedWidth;
  }
}