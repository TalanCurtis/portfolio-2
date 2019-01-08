import React from 'react';
import content from '../../content.json';

const Portfolio = () => {

    let projects = content.projects.map((x,i)=>{
      return (
              <div key={i} className="project-card">
                  <img src={`/images/projects/${x.coverImage}`} alt={x.coverImage}/>
                  <div className="header">
                    <div className="h3">{x.title}</div>
                  </div>                  
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