import React, {Component} from 'react';
import axios from 'axios';
import SectionHeader from '../SectionHeader/SectionHeader';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:""
    };
  }

 // TODO: after send mail should get a confirmation or pop up alert saying it was sent.
 // TODO: disable send message until name, valid email, and message has input.

  sendEmail = () => {
    console.log('hello',)
    const {name, email, message} = this.state
    axios.post('/api/email', {name, email, message}).then((res)=>console.log("response: ", res.data)).catch((err)=>console.log('error:',err))
  }

  handleInput = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
    })
    
  }
  render(){
    return (
      <div className = "Contact" id="Contact">
        <SectionHeader title="Contact"/>
        <div className="container">
          <div className="h3 intro">Lets Work Together!</div>
            <div className="h4 direction">Leave your name and email with a message and I will get back to you.</div>
          <div className="content">
            <div className="name h3">
              <label htmlFor="">Name</label>
              <input type="text"  title="name" onChange={this.handleInput}/>
            </div>
            <div className="email h3">
              <label htmlFor="">Email</label>
              <input type="text"  title="email" onChange={this.handleInput}/>
            </div>
            <div className="message h3">
              <label htmlFor="">Message</label>
              <textarea className="message"  title="message" name="message" rows="10"  onChange={this.handleInput}></textarea>
            </div>
            <button className="h3 send" onClick={this.sendEmail}>Send Email</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Contact;