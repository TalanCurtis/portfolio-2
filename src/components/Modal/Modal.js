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
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}','*');
    });
    let loadedVideos = document.getElementsByClassName("loadedVideo");
    _.forEach(loadedVideos, (x)=>{
      x.pause(); 
    });
  }

  render(){
    let links = _.map(this.props.modal.links, (x,i)=>{
      return(
        <div key={i} className="links">
          <div>{x.title}</div>
          <div> <a href={x.link} target="_blank" rel="noopener noreferrer">{x.link}</a></div>
        </div>
      );
    });

    return(
        <div className="Modal" onClick={this.handleCloseModal}>
          <div className="content" onClick={this.handleContentClick}>
            <div className="header">
              {this.props.modal.title}
              <XSVG className="x" size={25} onClick={this.handleCloseModal}/>
            </div>
            <div className="body" style={{width:"100%"}}>
              <Gallery />
            </div>
            <div className="footer">
              <div>{this.props.modal.description}</div>
              {links}
            </div>
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