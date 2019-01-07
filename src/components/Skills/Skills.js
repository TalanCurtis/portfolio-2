import React from 'react';
import content from '../../content.json';

const Skills = () => {
  let programming = content.skills.programming.cards.map((x,i)=>{
    return (
            <div key={i} className="SkillCard">
                <img src={`/images/icons/${x.image}`} alt={x.image}/>
                <h4>{x.title}</h4>
            </div>
    )
  })
  return (
    <div className = "Skills">
      <div className="title">
        <div className="h2">Skills</div>
        <hr/>
      </div>
      <div className="skill-section">
        <div className="sub-header">
          <div className="h3">Programming</div>
          <hr style={{width:"98%"}}/>
        </div>
        {programming}
      </div>
    </div>
  )
}

export default Skills;