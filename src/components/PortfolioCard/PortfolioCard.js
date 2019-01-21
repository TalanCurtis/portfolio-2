import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import { connect } from 'react-redux';
import { showModal } from '../../redux/reducers/modal/modalActions'

class PortfolioCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

   handleMouseEnter = () => {
    console.log("mouse enter");
    TweenMax.to(`.PortfolioCard${this.props.index}`, .25, {scale:1.03 , zIndex:100, boxShadow:"5px 5px red , -5px -5px  red,  5px -5px  red,  -5px 5px  red"});
  }
   handleMouseLeave = () => {
    console.log("mouse Leave");
    TweenMax.to(`.PortfolioCard${this.props.index}`, .25, {scale:1 ,zIndex:1, boxShadow:"0px 0px 0px none"});
  }
   handleOnClick = () => {
    console.log("on click", this.props);
    this.props.showModal(true);
  }
  render() {

  return (
    <div className={`PortfolioCard PortfolioCard${this.props.index}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleOnClick}>
      <img src={`/images/projects/${this.props.item.coverImage}`} alt={this.props.item.coverImage}/>
      <div className="header">
        <div className="h3">{this.props.item.title}</div>
      </div>               
    </div>
  )};
}

const outputActions = {
  showModal
};

function mapStateToProps (state) {
  return {
    modal: state.modal
  };
};

export default connect(mapStateToProps,outputActions)(PortfolioCard);