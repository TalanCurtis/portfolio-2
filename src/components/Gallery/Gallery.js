import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Power0, TimelineLite } from 'gsap';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      index:0,
    }
    this.tl = new TimelineLite();
  }

  componentDidUpdate(prevProps){
    if (this.props.modal.directory !== prevProps.modal.directory){
      this.setState({index:0})
      this.tl.set(".slider", {x:"0%",  ease:Power0.easeNone})
    }
  }

  handleLeft=()=>{
    if (this.state.index > 0){
      this.tl.to(".slider", .5, {x:"+=100%",  ease:Power0.easeNone})
      this.setState({index: this.state.index - 1 })
    }
    if (this.state.index === 0){
      let totalOffset = (this.props.modal.contentImages.length -1) * 100;
      this.tl.to(".slider", .5, {x:`-=${totalOffset}%`,  ease:Power0.easeNone})
      this.setState({index: this.props.modal.contentImages.length -1 }) 
    }
  }

  handleRight=()=>{
    if (this.state.index < this.props.modal.contentImages.length -1){
      this.tl.to(".slider", .5, {x:"-=100%", ease:Power0.easeNone})
      this.setState({index: this.state.index + 1})
    }
    if ( this.state.index === this.props.modal.contentImages.length -1){
      this.tl.to(".slider", .5, {x:"0%", ease:Power0.easeNone})
      this.setState({index: 0})
    }
  }
  
  render(){
    let images = _.map(this.props.modal.contentImages, (x,i)=>{
      let fileType = x.split(".");
      fileType = fileType[1];
      if (fileType === "jpg"){
        return (
          <div key={i} className="slider">
            <img src={`./images/projects/${this.props.modal.directory}/${x}`} alt={x}/>
          </div>
        );
      } else if ( fileType === "mp4"){
        return (
          <div key={i} className="slider">
            <video controls >
              <source src={`./images/projects/${this.props.modal.directory}/${x}`} type="video/mp4" />
            </video>
          </div>
        );
      }

    });

    return (
      <div className = "Gallery">
        <div className="carousel">
            {images}
        </div>
        <div className="nav">
          <button onClick={this.handleLeft} >{"<"}</button>
          <div> {`${this.state.index + 1} of ${this.props.modal.contentImages.length}`}</div>
          <button onClick={this.handleRight} >{">"}</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    modal: state.modal
  }
};

export default connect(mapStateToProps)(Gallery);