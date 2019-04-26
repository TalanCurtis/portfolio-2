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

  let artSkillsList = [
    "Web Design", "Concept Art", "Graphic Design", "2 & 3D Animation", "Digital Painting", "Rigging", "Story Boarding", "Animatics", "Color Theory", "Composition", "Texture Artist", "3D Modeler"
  ]
  
  let artSkills = artSkillsList.map((x,i)=>{
    return(
      <li className="h3">{x}</li>
    )
  })
  return (
    <div className = "Skills" id="Skills">
      <SectionHeader title="Skills"/>
      <div className="container">
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
          <div className="separator"></div>
        </div>
        <div className="skill-section">
          <div className="sub-header">
            <div className="h2">Art</div> 
            <div className="filters-container">
              <div className="filters"> filters</div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="skill-cards-container"> 
            <div className="grid">
              {art} 
            </div>

          </div>
          <div className="art-skills">
            <div className="info">
              <div className="card">
                <div className="sub-header-art h2">Artistic Skills</div>
                <div className="description h4">After being a professional artist for many years you acquire a wide set of skills: From global juggernauts like Electronic Arts to freelance graphic design.</div>
              </div>
              <div className="bullet-points">
                <div className="container">
                <ol>
                  {artSkills}
                </ol>
                </div>

              </div>
            </div>

          </div>
         </div>
      </div>

    </div>
  )
}

export default Skills;