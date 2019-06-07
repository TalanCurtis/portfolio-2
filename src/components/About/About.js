import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import AboutCard from '../AboutCard/AboutCard';
import content from '../../content.json';
import _ from 'lodash';

const About = () => {
  let aboutCards = _.map(content.aboutCards, (x,i)=>{
    return( 
        <AboutCard key={i}content={x} />
      )
  })

  // TODO: get svg icons for Engineer , artist, animator.
  // TODO: Update Picture
  // TODO: Fill in content.
  return (
    <div className = "About" id="About">
      <SectionHeader title="About"/>
        <div className="me">
          <img src="./images/assets/Alan_01.jpg" alt="profile"/>
          <div className="text">
            <div className="h2 title"> Hello, I am Alan. </div>
            <div className="h5 subtitle">Web Developer | Technical Artist</div>
            <div className="separator"></div>
            <p className="h4 info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti porro atque repudiandae nulla libero magni omnis, aspernatur adipisci molestiae molestias accusantium iste explicabo rem optio voluptatem. Rem impedit quia ipsa, unde vero odit explicabo ab nemo perspiciatis maiores ipsam veritatis. Dolores voluptatem, quo ipsum, a eos pariatur doloremque totam, explicabo ab deleniti cum labore quasi blanditiis quae adipisci vero?
            </p>
          </div>
        </div>
        <div className="aboutCards-container">
          {aboutCards}
        </div>
    </div>
  )
}

export default About;