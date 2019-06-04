import React , { Component } from 'react';

class FilterButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }
  toggle = () => {
    this.setState({selected: !this.state.selected})
  }
  render(){
    let selected = this.state.selected? "isActive": "";
    return(
      <div className={`FilterButton ${selected} h4`} onClick={this.toggle}>
        {this.props.title}
      </div>
    )
  }
}

export default FilterButton;
