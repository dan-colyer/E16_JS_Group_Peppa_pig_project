const CanvasView = function(){

}

CanvasView.prototype.render = function(){
  console.log("canvas render")
  const canvas = document.querySelector('canvas')
  canvas.className = 'peppapig_canvas'
  const context = canvas.getContext('2d')

  // context.clearRect(0, 0, canvas.width, canvas.height);

  let mouseDown = false;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const down = function() {
    mouseDown = true;
  }

  const toggleDraw = function() {
    mouseDown = false;
    lastX = null;
    lastY = null;
    canvas.style.cursor = "default";
  }

  const getMousePosition = function(canvas, event){
    const rect = canvas.getBoundingClientRect();
    return{
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }

  let lastX = null;
  let lastY = null;

  const draw = function(canvas, positionX, positionY){
    if(mouseDown){
      canvas.style.cursor = "pointer";

      context.beginPath();
      context.strokeStyle = "black";

      if(lastX == null) {
        lastX = positionX;
        lastY = positionY;
      }

      context.moveTo(lastX, lastY);
      context.lineTo(positionX, positionY);
      lastX = positionX;
      lastY = positionY;
      context.stroke();

      // context.fillRect(positionX, positionY, 5, 5);
    }
  };

  canvas.addEventListener('mousedown', down);
  canvas.addEventListener('mouseup', toggleDraw);
  canvas.addEventListener('mousemove', function(event) {
    let mousePosition = getMousePosition(canvas, event);
    // console.log(mousePosition);
    let positionX = mousePosition.x;
    let positionY = mousePosition.y;
    draw(canvas, positionX, positionY);
  });

  const changeColour = function() {
    console.log("colour", this.value);
    context.strokeStyle = this.value;
  }

  const colourPicker = document.querySelector('#color-picker');
  colourPicker.addEventListener('change', changeColour);


//   let x= 0;
//   let y= 0;
//
//   var backgroundImageURL = 'http://prodimage.images-bn.com/pimages/0026511050501_p0_v2_s1200x630.jpg'
//   canvas.style.backgroundImage = 'backgroundImageURL';
//
//   const colourPicker = document.querySelector('#colour-picker');
//   const changeColour = function() {
//     context.strokeStyle = this.value;
//   }
//   colourPicker.addEventListener('change', changeColour);
//   canvas.addEventListener('click', function(event) {
//     x = event.x;
//     y = event.y;
//     // drawLine(event.x, event.y);
//   });
//
//
// const drawLine = function(event) {
//   switch (event.keyCode) {
//     case 40:
//       context.beginPath();
//       context.moveTo(x, y);
//       if (y >= 557) {
//         y=557
//       } else {
//         y+=10
//       }
//
//       context.lineTo(x, y);
//       context.stroke();
//     break;
//
//     case 38:
//       context.beginPath();
//       context.moveTo(x, y);
//       if (y <= 124) {
//         y=124
//       } else {
//         y-=10
//       }
//       context.lineTo(x, y);
//       context.stroke();
//     break;
//
//     case 39:
//       context.beginPath();
//       context.moveTo(x, y);
//       if (x >= 723) {
//         x=723
//       } else {
//         x+=10
//       }
//       context.lineTo(x, y);
//       context.stroke();
//     break;
//
//     case 37:
//       context.beginPath();
//       context.moveTo(x, y);
//       if (x <= 125) {
//         x=125
//       } else {
//         x-=10
//       }
//       context.lineTo(x, y);
//       context.stroke();
//     break;
//   }
// }
// window.addEventListener('keydown', drawLine);


}

module.exports = CanvasView;
