import React from 'react';

const Footer = () => {

  // TODO: footer Back to top button. 
  // TODO: Links to my linked in, art Station, github, maybe facebook.
  
  return (
    <div className="Footer">
      <a className="h4" href="https://www.linkedin.com/in/alan-curtis-7aa94bb/" target="_blank" rel="noopener noreferrer"><img src=".\images\socialMedia\linkedIn.png" alt="linkedIn"/></a>
      <a className="h4" href="https://github.com/TalanCurtis" target="_blank" rel="noopener noreferrer"><img src=".\images\socialMedia\gitHub.png" alt="gitHub"/></a>
      <a className="h4" href="https://www.artstation.com/alancurtis31" target="_blank" rel="noopener noreferrer"><img src=".\images\socialMedia\artStation.png" alt="artStation"/></a>
    </div>
  )
}

export default Footer;