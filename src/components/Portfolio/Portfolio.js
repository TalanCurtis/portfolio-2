import React, { Component } from 'react';
import content from '../../content.json';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import Filter from '../Filter/Filter';
import _ from 'lodash';
import SectionHeader from '../SectionHeader/SectionHeader';
import { TweenMax } from 'gsap';

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
    this.setState({filters, filteredProjects: newFilteredProjects});
    this.animateCardContainer();
  }

  animateCardContainer(){
    if (!this.cardContainer) return;
    let cardContainerHeight = this.cardContainer.offsetHeight; 
    TweenMax.set(".card-container", { height:"auto" });
    TweenMax.from(".card-container", .5 , { height: cardContainerHeight });
    TweenMax.fromTo(".card-holder", .25 , { opacity:0 }, { opacity:1 });
  }

  render(){
    let projects = this.state.filteredProjects.map((x,i)=>{
      return (
        <PortfolioCard  key={i} item={x} index={i} />
      )
    })  
    return (
      <div className = "Portfolio" id="Portfolio">
       <SectionHeader title="Portfolio"/>
       <div className="content">
        <div className="sub-header">
            <div className="h2">Tech</div> 
            <div className="filters-container">
              <Filter handleFilter={this.handleFilter} filters={this.state.filters}/>
            </div>
          <div className="separator"></div>
        </div>
        <div className="project-container card-container" ref={(ref)=>this.cardContainer = ref}>
          {projects}
        </div>
       </div>
      </div>
    )
  }
}

export default Portfolio;