import React from 'react';
import AnimatorSvg from '../../images/AnimatorSvg';
import ArtistSvg from '../../images/ArtistSvg';
import EngineerSvg from '../../images/EngineerSvg';


const AboutCard = (props) => {

  const getIcon =()=>{
    switch (props.content.title) {
      case "Engineer": return (<EngineerSvg size="50px" />);
      case "Artist": return (<ArtistSvg size="50px" />);
      case "Animator": return (<AnimatorSvg size="50px" />);
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