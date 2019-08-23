import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Power0, TimelineLite } from 'gsap';
import ArrowLeftSVG from '../../images/ArrowLeftSVG';
import ArrowRightSVG from '../../images/ArrowRightSVG';

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
    this.stopAllVideos();
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
    this.stopAllVideos();
  }
  stopAllVideos = () => {
    // go through all Iframes and loaded videos and pause them. 
    let iframes = document.getElementsByTagName("iframe");
    _.forEach(iframes , (x)=>{
      let iframe = x.contentWindow;
      iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    });
    let loadedVideos = document.getElementsByClassName("loadedVideo");
    _.forEach(loadedVideos, (x)=>{
      x.pause(); 
    });
  }

  
  render(){
    let images = _.map(this.props.modal.contentImages, (x,i)=>{
      if(x.content){
        let fileType = x.content.split(".");
        fileType = fileType[1];
        if (fileType === "jpg"){
          return (
            <div key={i} className="slider">
              <div className="container">
                <div className="description">
                  <div className="title h3">{x.title}</div>
                  <div className="note h4">{x.note}</div>
                </div>
                <div className="image-container">
                  <img src={`./images/projects/${this.props.modal.directory}/${x.content}`} alt={x}/>
                </div>
              </div>
            </div>
          );
        } else if ( fileType === "mp4"){
          return (
            <div key={i} className="slider">
              <div className="container">
                <div className="description">
                  <div className="title h3">{x.title}</div>
                  <div className="note h4">{x.note}</div>
                </div>
                <div className="image-container">
                   <video className="loadedVideo" controls >
                     <source src={`./images/projects/${this.props.modal.directory}/${x.content}`} type="video/mp4" />
                   </video> 
                </div>
              </div>
            </div>
          );
        } else if (x.content.includes("youtube")){
          return (
            <div key={i} className="slider">
              <div className="container">
                <div className="description">
                  <div className="title h3">{x.title}</div>
                  <div className="note h4">{x.note}</div>
                </div>
                <div className="image-container">
                  <div className="youtube-container">
                    <iframe title={`youtube${i}`}className="youtube" src={x.content+"?version=3&enablejsapi=1"} />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    });

    let showArrows = this.props.modal.contentImages.length > 1;

    return (
      <div className = "Gallery">
        <div className="carousel" >
          <div className="slider-box">
            {images}
          </div>
        </div>
        {showArrows ? <ArrowLeftSVG className="left" fill="white" onClick={this.handleLeft} /> :  null}
        <div className="tick-container" >  {`${this.state.index + 1} of ${this.props.modal.contentImages.length}`}</div>
        {showArrows ? <ArrowRightSVG className="right" fill="white" onClick={this.handleRight} /> :  null}
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