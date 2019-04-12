import React from 'react';
import content from '../../content.json';

const Skills = () => {
  let programming = content.skills.programming.cards.map((x,i)=>{
    return (
            <div key={i} className="skill-card">
                <img src={`/images/icons/${x.image}`}  style={{width:"60px"}}alt={x.image}/>
                <div className="h4">{x.title}</div>
            </div>
    )
  })
  let art = content.skills.art.cards.map((x,i)=>{
    return (
            <div key={i} className="skill-card">
                <img src={`/images/icons/${x.image}`}  style={{width:"60px"}}alt={x.image}/>
                <div className="h4">{x.title}</div>
            </div>
    )
  })
  return (
    <div className = "Skills">
      <div className="title">
        <div className="h2">Skills</div>
        <hr style={{width:"98%"}}/>
      </div>
      <div className="skill-section">
        <div className="sub-header">
          <div className="h3">Programming</div> 
          <div className="hr-container">
           <hr />
          </div>
        </div>
        <div className="skill-cards"> 
          {programming} 
        </div>
      </div>
      <div className="skill-section">
        <div className="sub-header">
          <div className="h3">Art</div> 
          <div className="hr-container">
            <hr />
          </div>
          
        </div>
        <div className="skill-cards"> 
          {art} 
        </div>
      </div>
    </div>
  )
}

export default Skills;