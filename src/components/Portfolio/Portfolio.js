import React from 'react';
import content from '../../content.json';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import SearchBar from '../SearchBar/SearchBar';

const Portfolio = () => {

    let projects = content.projects.map((x,i)=>{
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
      <SearchBar />
      <div className="project-container">
        {projects}
      </div>
    </div>
  )
}

export default Portfolio;