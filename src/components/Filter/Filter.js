import React, {Component} from 'react';
import content from '../../content.json';
import _ from 'lodash';
import FilterButton from '../FilterButton/FilterButton';

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
        <div key={i} value={x} onClick={()=>this.handleFilter(x)} style={{margin:'5px'}}>
          <FilterButton title={x}/>
        </div>
      )
    })
    return tagList;
  }

  handleFilter(e){
    this.props.handleFilter(e);
  }

  render(){
    
    return(
      <div className="Filter">
        {this.getAllTags()}
      </div>
    )
  }
}

export default Filter;