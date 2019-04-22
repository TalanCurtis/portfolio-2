import React from 'react';
import AnimatorSvg from '../../images/AnimatorSvg';
import ArtistSvg from '../../images/ArtistSvg';
import EngineerSvg from '../../images/EngineerSvg';
import SectionHeader from '../SectionHeader/SectionHeader';

const About = () => {
  return (
    <div className = "About" id="About">
      <SectionHeader title="About"/>
      <div className="grid">
        <div className="me">
          {/* <div className="photo" style={{backgroundColor:'grey', height:'250px', width:'250px'}}> my photo </div>  */}
          <img src="./images/assets/Alan_01.jpg" alt="profile"/>
          <div className="text">
            <div className="h2 title"> Hello, I am Alan. </div>
            <div className="h5 subtitle">Web Developer | Technical Artist</div>
            <div className="separator"></div>
            <p className="h4 info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti porro atque repudiandae nulla libero magni omnis, aspernatur adipisci molestiae molestias accusantium iste explicabo rem optio voluptatem. Rem impedit quia ipsa, unde vero odit explicabo ab nemo perspiciatis maiores ipsam veritatis. Dolores voluptatem, quo ipsum, a eos pariatur doloremque totam, explicabo ab deleniti cum labore quasi blanditiis quae adipisci vero?
            </p>
          </div>
        </div>

        <div className="skill-cards">
          <div className="skill-card">
            <AnimatorSvg size="60px" />
            <div className="h3"> Animator </div>
            <p className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis possimus animi veniam cum voluptate, similique minus facilis laborum error at labore illo. Earum quas dolorum alias unde non.</p>
          </div>
          <div className="skill-card">
            <ArtistSvg size="60px" />
            <div className="h3"> Artist </div>
            <p className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis possimus animi veniam cum voluptate, similique minus facilis laborum error at labore illo. Earum quas dolorum alias unde non.</p>
          </div>
          <div className="skill-card">
            <EngineerSvg size="60px" />
            <div className="h3"> Engineer </div>
            <p className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis possimus animi veniam cum voluptate, similique minus facilis laborum error at labore illo. Earum quas dolorum alias unde non.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;