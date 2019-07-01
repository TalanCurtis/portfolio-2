import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../redux/reducers/modal/modalActions';
import _ from 'lodash';
import Gallery from '../Gallery/Gallery';
import XSVG from '../../images/XSVG';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  handleShowModal = () => {
    this.props.showModal(true)
  }

  handleCloseModal = () => {
    this.props.showModal(false);
    this.stopAllVideos();
  }

  handleContentClick = (e) => {
    e.stopPropagation();
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
  tags = () => {
    let string = "";
    _.forEach(this.props.modal.tags, (tag, i)=>{
      if( this.props.modal.tags.length === i + 1 ){
        string = string.concat(`${tag}`)
      } else {
        string = string.concat(`${tag} | `)
      }
    })

    return (
      <div className="tech">{string}</div>
    )
  }

  render(){
    let links = _.map(this.props.modal.links, (x,i)=>{
      return(
        <div key={i} className="link">
          <div> <a className="h4" href={x.link} target="_blank" rel="noopener noreferrer">{x.title}</a></div>
        </div>
      );
    });
   
    let hasLinks = false;
    if (links.length > 0){
      hasLinks = true;
    }

    let achievements = _.map(this.props.modal.achievements, ((x,i)=>{
      return(
        <li key={i} className="h4">{x}</li>
      )})
    );
    console.log(this.props)


    return(
        <div className="Modal" onClick={this.handleCloseModal}>
          <div className="content" onClick={this.handleContentClick}>
            <div className="header">
              <div className="title h2">
                {this.props.modal.title}
              </div>
              <XSVG className="x" size={20} fill="white" onClick={this.handleCloseModal}/>
              {this.tags()}
            </div>
            <div className="achievements">
              <div className="container"> 
                <div className="title h3">Achievements:</div>
                <ol>{achievements}</ol>
              </div>
            </div>
            <div className="body" style={{width:"100%" , height:"100%"}}>
              <Gallery />
            </div> 
            {hasLinks? 
                  <div className="link-container">
                    <div className="title h4">Links:</div>
                    {links}
                  </div>
                : null
            }
            {/* <div className="header">
              <div className="title h3">
                {this.props.modal.title}
              </div>
              <XSVG className="x" size={20} onClick={this.handleCloseModal}/>
            </div>
            <div className="achievements">
              <div className="container"> 
                <div className="title h3">Achievements:</div>
                <ol>{this.props.modal.achievements}</ol>
              </div>
            </div>
            <div className="body" style={{width:"100%" , height:"100%"}}>
              <Gallery />
              {hasLinks? 
                  <div className="link-container">
                    <div className="title h4">Links:</div>
                    {links}
                  </div>
                : null
                }
            </div> */}
          </div>
        </div>
    )
  }
};

const outputActions = {
  showModal
}

function mapStateToProps (state) {
  return {
    modal:state.modal
  }
}

export default connect(mapStateToProps, outputActions)(Modal);