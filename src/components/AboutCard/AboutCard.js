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

  return(
    <div className="AboutCard">
      <div>
        <div className=" h1 title" >{props.content.title}</div>
        <div className="separator"></div>
      </div>
      {getIcon()}
      <div className="description">{ props.content.description }</div>
    </div>
  )
}

export default AboutCard 