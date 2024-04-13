h = 1000
w = 1000

function setup() {
  createCanvas(1000, 1000);
  
  input = createInput();
  input.position(width/3, height/2);
  
  button = createButton('submit');
  button.position(input.x + input.width, input.y);
  button.mousePressed(check_input);
  
  
  push();
  fill(255)
  text('Blorbyle',0,0)
  pop()
  
    // Set text characteristics
  //textFont(font);
  //textSize(fontsize);
  //textAlign(CENTER, CENTER);
}

function draw() {
  background(50, 50, 50);
  
  
  
  
  fill(255,25,25);
  rect(0.75 * width/10, height/10, width/10, height/10);
  
  fill(255, 125, 0)
  rect(2.25 * height/10, height/10, width/10, height/10)
  
  fill(255, 255, 51)
  rect(3.75 * height/10, height/10, height/10, height/10)
  
  fill(0, 255, 0)
  rect(5.25 * height/10, height/10, height/10, height/10)
  
  fill(0, 0, 255)
  rect(6.75 * height/10, height/10, height/10, height/10)
  
  fill(255, 0, 255)
  rect(8.25 * height/10, height/10, height/10, height/10)
  
  fill(255);
  rect(0.8*width/10, 1.05*height/10, width/11.1, height/11.1);
  fill(255);
  rect(2.3*width/10, 1.05*height/10, width/11.1, height/11.1);
  fill(255);
  rect(3.8*width/10, 1.05*height/10, width/11.1, height/11.1);
  fill(255);
  rect(5.3*width/10, 1.05*height/10, width/11.1, height/11.1);
  fill(255);
  rect(6.8*width/10, 1.05*height/10, width/11.1, height/11.1);
  fill(255);
  rect(8.3*width/10, 1.05*height/10, width/11.1, height/11.1);
  

}
function check_input(){
  const guess = input.value()
  
}
//function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  //fill(0);
  //text('ichi', width/2, width/10)
    
//}
