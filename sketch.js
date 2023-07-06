

let capture;
let facingUser = true;

// let field;
// let field2;


function setup() {
  createMetaTag();
  createCanvas(window.innerWidth, window.innerHeight);


// field = createInput("This Friday, in Leiceter,");
// field2 = createInput("collection between 8:00-14:00");

  // pixelDensity(1);

  setupCamera();

  frameRate(60);


  // fill(250,210,210);
  // textFont(myFont);
  // textSize(40);

}



function draw() {
  if (facingUser) {
    // flip camera horizontally
    // translate(width, 0);
    // scale(-1, 1);
  }
  image(capture, 0, 0, width, height);

  let sinVal = sin(frameCount * 0.05);
  textFont("Garamond");

//   text(field.value(), 100 + (10 + sinVal) * 0.50 * (1 + sinVal) , 500, 500, 500
// );
//   text(field.value(), 100 + (1 + sinVal) * 0.50 * (1 + sinVal) , windowHeight/2 + (1 + sinVal) * 10,800, 800
// );

//   text(field2.value(), 200 - (1 + sinVal) * 9 * (1 + sinVal) , windowHeight/1.5 - (1 + sinVal) * 9 * (1 + sinVal),500, 500
// );

}


function touchStarted() {
  facingUser = !facingUser;
  setupCamera();
}

function setupCamera() {
  if (capture) {
    capture.remove();
  }

  capture = createCapture({
    video: {
      facingMode: facingUser ? 'user' : 'environment'
    },
    audio: false
  });
  capture.size(width, height);
  capture.hide();
}

function touchMoved() {
  // prevent the display from moving around when you touch it
  return false;
}

function createMetaTag() {
  let meta = createElement('meta');
  meta.attribute('name', 'viewport');
  meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

  let head = select('head');
  meta.parent(head);
}
