import React from 'react';
import content from '../../content.json';
import SectionHeader from '../SectionHeader/SectionHeader';
import SkillCard from '../SkillCard/SkillCard';

const Skills = () => {
  let programming = content.skills.programming.cards.map((x,i)=>{
    return (
      <SkillCard key={i} content={x}/>
    )
  })

  let art = content.skills.art.cards.map((x,i)=>{
    return (
      <SkillCard key={i} content={x}/>
    )
  })
  return (
    <div className = "Skills" id="Skills">
      <SectionHeader title="Skills"/>
      <div className="skill-section">
        <div className="sub-header">
          <div className="h2">Programming</div> 
          <div className="filters-container">
            <div className="filters"> filters</div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="skill-cards-container"> 
          <div className="grid">
            {programming} 
          </div>
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