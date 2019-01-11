import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:""
    };
  }

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
      <div className = "Contact">
        <label htmlFor="">Name</label>
        <input type="text" className="name" title="name" onChange={this.handleInput}/>
        <label htmlFor="">Email</label>
        <input type="text" className="email"  title="email" onChange={this.handleInput}/>
        <label htmlFor="">Message</label>
        <textarea className="message"  title="message" name="message" rows="10" cols="30" onChange={this.handleInput}></textarea>
        <button onClick={this.sendEmail}>Send Email</button>
      </div>
    )
  }
}

export default Contact;