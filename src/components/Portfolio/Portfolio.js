import React, { Component } from 'react';
import content from '../../content.json';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import SearchBar from '../SearchBar/SearchBar';
import _ from 'lodash';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredProjects: _.cloneDeep(content.projects),
      filters:[]
    }
  }
  
  handleFilter = (filter)=>{
    let filters = this.state.filters;
    if(!_.includes(filters, filter)){
      filters.push(filter);
    } else {
      _.remove(filters, (x)=>x === filter)
    }
    let filteredProjects = content.projects;
    let newFilteredProjects = []
    for ( let project in filteredProjects){
      for (let tag in filteredProjects[project].tags){
        for ( let x in filters ){
          if (filteredProjects[project].tags[tag] === filters[x] ){
            if ( !_.includes(newFilteredProjects, filteredProjects[project] )){
              newFilteredProjects.push(filteredProjects[project])
            }
          }
        }
  
      }
    }
  
    if(_.isEmpty(filters)){
      newFilteredProjects = content.projects;
    }
    this.setState({filters, filteredProjects: newFilteredProjects})
  }


  render(){
    let projects = this.state.filteredProjects.map((x,i)=>{
      return (
        <PortfolioCard  key={i} item={x} index={i} />
      )
    })  
    return (
      <div className = "Portfolio">
        <div className="title">
          <div className="h2">Portfolio</div>
          <hr style={{width:"98%"}}/>
        </div>
        <SearchBar handleFilter={this.handleFilter}/>
        <div className="project-container">
          {projects}
        </div>
      </div>
    )
  }
}

export default Portfolio;