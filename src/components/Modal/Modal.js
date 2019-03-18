import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../redux/reducers/modal/modalActions';

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
    this.props.showModal(false)
  }

  render(){
    let body = this.props.modal.body.map((x,i)=>{
      if (x.includes(".mp4")){
        return(
        <video width="320" height="240" controls>
          <source src={`./images/projects/${this.props.modal.activeProject}/${x}`} type="video/mp4" />
           Your browser does not support the video tag.
        </video> 
        )  
      } else {
        return(
          <div key={i} style={{}}>
            <img style={{maxHeight:"100%", maxWidth:"100%"}} src={`./images/projects/${this.props.modal.activeProject}/${x}`} alt=""/>
          </div>
        )
      }
    })

    let footer =  this.props.modal.footer.map((x,i)=>{return(
      <div key={i}>
        {x.title}: {x.link}
      </div>
    )})


    return(
        <div className="Modal" onClick={this.handleCloseModal}>
          <div className="content">
            <div className="header">
              {this.props.modal.header}
              <button onClick={this.handleCloseModal}>X</button>
            </div>
            <div className="body">
              {body[0]}
            </div>
            <div className="footer">
              <div>{this.props.modal.description}</div>
              {footer}
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