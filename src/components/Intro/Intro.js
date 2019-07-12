import React,{ Component } from 'react';
import { Power4, Bounce, TimelineMax } from 'gsap';

class Intro extends Component {  
  constructor(props){
    super(props);
    this.state = {

    }
    this.myElement = null;
    this.tl = new TimelineMax({paused: true});
    this.iam = null;
    this.name = null;
    this.sub = null;

  } 

  componentDidMount(){
    this.tl.from(this.iam, 1.5, { opacity: 0 , x: "-100%", ease: Power4.easeOut }, .8);
    this.tl.from(this.name, 1.5, {opacity: 0 , x: "+100%" , ease: Power4.easeOut}, 1.2);
    this.tl.from(this.sub, 0.5, {opacity: 0, y:"-50%", ease: Bounce.easeOut}, 2.7);
    this.tl.play();
  }

  scrollToMyRef = () => {
    // add 60 for header offset;
    let elem = document.getElementById("About");
    window.scrollTo(0, elem.offsetTop - 60);
  };

  render(){


    return (
      <div className="Intro" id="Intro" >
        <div className="header h1"  ><div className="iam" ref={elem => this.iam = elem}> I am </div> <div ref={elem => this.name = elem} className="name" > Alan Curtis </div></div>
        <div className="sub" ref={elem => this.sub = elem}>
          <div className="sub-header h2"> Web Developer | Technical Artist</div>
          <button className="goto colorBtn h3" onClick={this.scrollToMyRef}>My Work</button>
        </div>
      </div>
    )
  }
}

export default Intro;
