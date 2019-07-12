import React, {Component} from 'react';
import axios from 'axios';
import SectionHeader from '../SectionHeader/SectionHeader';
import EmailSvg from '../../images/EmailSvg';
import { Power4 , TimelineMax } from 'gsap';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:""
    };
    this.tl = new TimelineMax({paused: true});
  }

 componentDidMount(){
   this.animation();
 }

  animation = () => {
    this.tl.set("#envelope-all", {opacity: 0 , zIndex: 600000});
    this.tl.to("#envelope-all", .4, {opacity: 1 , ease: Power4.easeInOut });
    this.tl.set('#lid-front', {opacity: 0, transformOrigin:"50% 96%"});
    this.tl.to("#letter", 1, {  y: "204%", ease: Power4.easeInOut });
    this.tl.set('#lid-front', {opacity: 1});
    this.tl.set('#lid-back', {opacity: 0});
    this.tl.to("#lid-front", .5, { scaleY:-1 ,  ease: Power4.easeOut });
    this.tl.to("#envelope-all", .3, {x:"-3%" , ease: Power4.easeInOut });
    this.tl.to("#envelope-all", 1, {x:"+200%", opacity: 0, ease: Power4.easeOut });
  }

  sendEmail = () => {
    const {name, email, message} = this.state
    this.tl.restart();
    axios.post('/api/email', {name, email, message}).then((res)=>console.log("response: ", res.data)).catch((err)=>console.log('error:',err));
    this.setState({ 
      name:"",
      email:"",
      message:""
    })
  }

  handleInput = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
    })
  }

  render(){
    let isDisabled = true;
    let disabled = "disabled";
    if (this.state.name && this.state.email && this.state.message ){
      isDisabled = false;
      disabled = "";
    }
    return (
      <div className = "Contact" id="Contact">
        <SectionHeader title="Contact"/>
        <div className="container">
          <div className="h3 intro">Lets Work Together!</div>
            <div className="h4 direction">Leave your name and email with a message and I will get back to you.</div>
          <div className="content">
            <div className="name h3">
              <label htmlFor="">Name</label>
              <input type="text"  title="name" onChange={this.handleInput} value={this.state.name}/>
            </div>
            <div className="email h3">
              <label htmlFor="">Email</label>
              <input type="text"  title="email" onChange={this.handleInput} value={this.state.email}/>
            </div>
            <div className="message h3">
              <label htmlFor="">Message</label>
              <textarea className="message"  title="message" name="message" rows="10"  onChange={this.handleInput} value={this.state.message}></textarea>
            </div>
            <button disabled={isDisabled} className={`h3 send colorBtn ${disabled}`} onClick={this.sendEmail}>Send Email</button>
            <EmailSvg size={200} />
          </div>
        </div>

      </div>
    )
  }
}

export default Contact;