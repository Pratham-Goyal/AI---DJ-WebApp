function preload(){
    
}

function setup(){
  canvas = createCanvas(350, 350);
  canvas.position(200 , 400);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
image(video , 0 , 0 , 350 , 350);
}
