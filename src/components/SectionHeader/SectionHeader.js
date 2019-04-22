import React from 'react';
import LineSVG from '../../images/LineSvg';
import { Power0, TimelineLite } from 'gsap';

const SectionHeader = (props) => {


  function p (){
    let tl = new TimelineLite();
    console.log("playAnimation")
    tl.set('.uni', {opacity: .5})
    tl.to('.uni', 1 , {opacity: 1})
    tl.play();
  }
  p()
  
  return(
    <div className="SectionHeader" >
      <div className="h1 title uni"> 
        {props.title}
      </div> 
    </div>
  )
}

export default SectionHeader;