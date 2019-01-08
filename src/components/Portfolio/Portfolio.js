import React from 'react';
import content from '../../content.json';

const Portfolio = () => {

    let projects = content.projects.map((x,i)=>{
      return (
              <div key={i} className="project-card">
                  <img src={`/images/icons/${x.image}`}  style={{width:"60px"}}alt={x.image}/>
                  <div className="h4">{x.title}</div>
              </div>
      )
    })  
    
  return (
    <div className = "Portfolio">
      <div className="title">
        <div className="h2">Portfolio</div>
        <hr style={{width:"98%"}}/>
      </div>
      <div className="project-container">
        {projects}
      </div>
    </div>
  )
}

export default Portfolio;