import React,{ Component } from 'react';

class Intro extends Component {   
//   constructor(props) {
//     super(props);
//     this.state = { 
//       width: 0,
//       height: 0,
//       colorArray: [
//         "#F8B195",
//         "#F67280",
//         "#C06C84",
//         "#6C5B7B",
//       ],
//       circleArray: [],
//       mouseX:undefined,
//       mouseY:undefined,
//      };
//     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//     this.mouseMove = this.mouseMove.bind(this);
//   }

//   mouseMove = (event)=>{
//     this.setState({
//       mouseX: event.x,
//       mouseY: event.y,
//     })
//   }
  
//   componentDidMount() {
//     this.updateWindowDimensions();
//     window.addEventListener('resize', this.updateWindowDimensions);
//     let canvas = document.querySelector("canvas");
//     canvas.width = this.state.width;
//     canvas.height = this.state.height;
//     this.c = canvas.getContext('2d');

//     // this.mouse = {
//     //   x: undefined,
//     //   y: undefined
//     // }
    
//     window.addEventListener('mousemove', function(event){
//       // this.state.mouseX = event.x;
//       // this.state.mouseY = event.y;
//       this.mouseMove(event);
 
//     });
    
//     window.addEventListener('resize', function (){
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       this.init();
//     })
//   }


  
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateWindowDimensions);
//   }
  
//   updateWindowDimensions() {
//     this.setState({ width: window.innerWidth, height: window.innerHeight });
//   }

//   Circle (x, y, dx, dy, radius, minRadius, maxRadius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius= radius;
//     this.color = this.state.colorArray[ Math.floor(Math.random() * this.state.colorArray.length)]
//     this.minRadius = minRadius;
//     this.maxRadius = maxRadius;
  
//     this.draw = function () {
//       this.c.beginPath();
//       this.c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
//       this.c.fillStyle = this.color;
//       this.c.fill();
      
//     }
//     this.update = function () {
//       if (this.x + radius > this.state.width || this.x - radius < 0 ){
//         this.dx = -this.dx;
//       }
//       if (this.y + radius > this.state.height || this.y - radius < 0 ){
//         this.dy = -this.dy;
//       }
    
//       this.x += this.dx;
//       this.y += this.dy;
  
//       // Mouse interactivity. What happens when mouse move event happens.
//       if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50
//         && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50
//         ) {
//           if ( this.radius < this.maxRadius){
//             this.radius += 1;
//           }
        
//       } else if ( this.radius > this.minRadius) {
//         this.radius -= 1;
//       }
  
//       this.draw();
//     }
//   }

  
// init(){
//   this.state.circleArray= [];
//   for (let i = 0; i < 800 ; i++){
//     let radius = Math.random() * 3 + 1 ;
//     let x = Math.random() * ( this.state.width - radius * 2) + radius;
//     let y = Math.random() * ( this.state.height - radius * 2) + radius;
//     let dx = (Math.random() -0.5) * 2;
//     let dy = (Math.random() -0.5) * 2;
//     let minRadius = Math.random() * 3 + 1 ;
//     let maxRadius = Math.random() * 40 + 10 ;
  
//     this.state.circleArray.push(new this.Circle( x, y , dx, dy, radius, minRadius, maxRadius));
//   }
// }

// animate () {
//   requestAnimationFrame(this.animate);
//   this.c.clearRect(0, 0 , this.state.width, this.state.height);
  
//   for( let circle in this.state.circleArray ){
//     this.state.circleArray[circle].update();
//   }
// }

  render(){
    return (
      <div className = "Intro" id="Intro" style={{backgroundColor:"blue", height:"100%", width:"100%" }}>
        <canvas className="canvas" style={{backgroundColor:"yellow", height:"100%", width:"100%" }}></canvas>
      </div>
    )
  }
}

export default Intro;
/*
console.log("canvas playground")
// end of tutorial working version.

let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
}

let colorArray= [
  "#F8B195",
  "#F67280",
  "#C06C84",
  "#6C5B7B",
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
    let dx = (Math.random() -0.5) * 2;
    let dy = (Math.random() -0.5) * 2;
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

*/