import React from 'react';

const AboutCard = (props) => {

  const getIcon =()=>{
    switch (props.content.title) {
      case "Engineer": return (<img height="50" src="./images/icons/a_engineer.png" alt=""/>);
      case "Artist": return (<img height="50" src="./images/icons/a_artist.png" alt=""/>);
      case "Animator": return (<img height="50" src="./images/icons/a_animator.png" alt=""/>);
      default: return (<div>No Icon</div>  );
    }
  }

  const cssPosition = () => {
    let position = "top";
    if (props.content.id === 1 ){
      position = "bottom";
    }
    return position;
  }

  return(
    <div className="AboutCard">
        <div className={`info ${cssPosition()}`}>
          <div className=" h1 title" >{props.content.title}</div>
          <div className="separator"></div>
          {getIcon()}
          <div className="description h4">{ props.content.description }</div>
        </div>
      <div className={`iconBox ${cssPosition()}`}>{getIcon()}</div>
    </div>
  )
}

export default AboutCard 