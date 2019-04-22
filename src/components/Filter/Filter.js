import React, {Component} from 'react';
import content from '../../content.json';
import _ from 'lodash';

class Filter extends Component {

  getAllTags =()=>{
    let tags = [];
    _.forEach(content.projects, (x)=>{
      _.forEach(x.tags, (y)=>{
        if (!_.includes(tags, y)){
          tags.push(y)
        }
      })
    })
    let tagList = _.map(tags, (x,i)=>{
      return(
        <div key={i} value={x} onClick={()=>this.handleFilter(x)} style={{margin:'10px'}}>
          {x}
        </div>
      )
    })
    return tagList;
  }

  handleFilter(e){
    console.log(e)
    this.props.handleFilter(e);
  }

  render(){
    
    return(
      <div style={{display:'flex'}}>
        {this.getAllTags()}
      </div>
    )
  }
}

export default Filter;