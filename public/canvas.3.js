console.log("canvas playground")
// end of tutorial working version.

let canvas = document.getElementById("int-canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
}

let colorArray= [
  "rgb(66, 49, 138)",
  "rgb(61, 175, 86)",
  "rgb(70, 125, 197)",
  "rgb(91, 216, 204)",
]

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function (){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Circle (x, y, dx, dy, radius, minRadius, maxRadius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius= radius;
  this.color = colorArray[ Math.floor(Math.random() * colorArray.length)]
  this.minRadius = minRadius;
  this.maxRadius = maxRadius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    
  }
  this.update = function () {
    if (this.x + radius > innerWidth || this.x - radius < 0 ){
      this.dx = -this.dx;
    }
    if (this.y + radius > innerHeight || this.y - radius < 0 ){
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    // Mouse interactivity. What happens when mouse move event happens.
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50
      ) {
        if ( this.radius < this.maxRadius){
          this.radius += 1;
        }
      
    } else if ( this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

let circleArray = [];

function init(){
  circleArray= [];
  for (let i = 0; i < 800 ; i++){
    let radius = Math.random() * 3 + 1 ;
    let x = Math.random() * ( innerWidth - radius * 2) + radius;
    let y = Math.random() * ( innerHeight - radius * 2) + radius;
    let dx = (Math.random() -0.5) * 1.2;
    let dy = (Math.random() -0.5) * 1.2;
    let minRadius = Math.random() * 3 + 1 ;
    let maxRadius = Math.random() * 40 + 10 ;
  
    circleArray.push(new Circle( x, y , dx, dy, radius, minRadius, maxRadius));
  }
}

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0 , innerWidth, innerHeight);
  
  for( let circle in circleArray ){
    circleArray[circle].update();
  }
}

init();
animate();