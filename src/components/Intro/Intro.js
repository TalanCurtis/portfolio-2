import React,{ Component } from 'react';

class Intro extends Component {  
  constructor(props){
    super(props);
    this.state = {

    }
  } 

  componentDidMount(){

  }
  scrollToMyRef = () => {
    // add 60 for header offset;
    let elem = document.getElementById("About");
    window.scrollTo(0, elem.offsetTop - 60);
  };

  render(){


    return (
      <div className="Intro" id="Intro" >
        <div className="header h1"><p> I am  <span className="name" > Alan Curtis </span> </p></div>
        <div className="sub-header h2"> Web Developer | Technical Artist</div>
        <button className="goto colorBtn h3" onClick={this.scrollToMyRef}>My Work</button>
      </div>
    )
  }
}

export default Intro;
