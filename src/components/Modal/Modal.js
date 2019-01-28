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
    return(
        <div className="Modal">
          <div className="header">
            Header content
            <button onClick={this.handleCloseModal}>X</button>
          </div>
          <div className="body">
            Body content
          </div>
          <div className="footer">
            footer content
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