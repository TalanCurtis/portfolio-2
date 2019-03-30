import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

class Gallery extends Component {
  
  render(){
    console.log(this.props)
    let itemTicks = _.map(this.props.content, (x, i)=>{
      let active = "";
      if (i === 0 ){
        active = "active"
      }
      return(
      <div className={`tick ${active}`} ></div>
    )})
    return (
      <div className = "Gallery">
        <div className="carousel" style={{height:"400px", width:"100%", backgroundColor:"blue" }}>
          <div className="image" >
            <img src="./images/projects/PaintYourPixture/PaintYourPixture.JPG" alt=""/>
          </div>
          <div className="btn button-left" ></div>
          <div className="btn button-right" ></div>
          <div className="tick-container">
            {itemTicks}
          </div>
        </div>
      </div>
    )
  }
}

Gallery.defaultProps = {
  content:[1,2,3]
} 

function mapStateToProps(state){
  return {
  }
};
export default connect(mapStateToProps)(Gallery);