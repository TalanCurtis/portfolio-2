import React, {Component} from 'react';
import content from '../../content.json';
import _ from 'lodash';

class SearchBar extends Component {

  getAllTags =()=>{
    let tags = [];
    _.forEach(content.projects, (x)=>{
      _.forEach(x.tags, (y)=>{
        if (!_.includes(tags, y)){
          tags.push(y)
        }
      })
    })
    console.log(tags)
    let tagList = _.map(tags, (x,i)=>{
      return(
        <div key={i}>
          {x}
        </div>
      )
    })
    console.log(tagList)
    return tagList;
  }

  render(){
    console.log(content)
    
    return(
      <div>
        SearchBar
        {this.getAllTags()}
      </div>
    )
  }
}

export default SearchBar;