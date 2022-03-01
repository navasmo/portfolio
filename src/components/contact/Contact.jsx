import {  useRef, useState } from "react";
import { Phone, Mail, GitHub, LinkedIn, CloudDownload } from "@material-ui/icons";
import "./contact.scss";
import emailjs from "emailjs-com";
import Button from '@material-ui/core/Button';


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qfzs5ng",
        "template_6f6y8an",
        formRef.current,
        "73Ul5C0HyqmNs4dYg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
  
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="itemContainer">
            <span><Phone className="icon" /> +44 7429006011</span>
          </div>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="mailto:vhnavasse@gmail.com">
            <Mail className="icon" />
            <span>vhnavasse@gmail.com</span>
          </Button>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="https://github.com/navasmo" target="_blank">
            <GitHub className="icon" />
            <span>navasmo</span>
          </Button>
          <Button className="itemContainer"  style={{textTransform: 'none'}} href="https://www.linkedin.com/in/navasmo/" target="_blank">
            <LinkedIn className="icon" />
            <span>navasmo</span>
          </Button>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="https://docs.google.com/document/d/1sg4oUc7RyvzX2vc4rHxzohqS61IWs9ts/edit?usp=sharing&ouid=107024906914517971505&rtpof=true&sd=true">
            <CloudDownload className="icon" />
            <span>resume</span>
          </Button>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button >Send</button >
             {done && <span>Thank you for reaching out, I'll get back to ASAP :)</span>}
             
          </form >
      </div>
    </div>
  );
}

export default Contact;