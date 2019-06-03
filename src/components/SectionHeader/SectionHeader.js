import React from 'react';

const SectionHeader = (props) => {
  
  return(
    <div className="SectionHeader" >
      <div className="h1 title uni"> 
        {props.title}
      </div> 
    </div>
  )
}

export default SectionHeader;