import React from 'react';

const SkillCard = (props) => {
  const {image, title} = props.content;
  return(
    <div className="SkillCard">
        <img src={`/images/icons/${image}`}  style={{width:"60px"}}alt={image}/>
        <div className="h5">{title}</div>
    </div>
  )
}

export default SkillCard;