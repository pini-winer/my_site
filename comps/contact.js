
import React from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";


function Contact(props) {

  
  return (
    <div id="contactid" className="container-fluid">
      <h1
        className="text-center m-5 p-3 text-decoration-underline">
       contact info
      </h1>
      {/* <Contact/> */}
      <div className=" ">
      
<div  className="text-center  ">
     
          <FaGithub id="FaGithub2id" className="icon " data-tip=" My Github" /><a href="https://github.com/pini-winer"> github.com</a>
      
      
        <FaLinkedin
          id="FaLinkedin2id"
          className="icon ps-2"
          data-tip="My Linkedin"
          /><a href="https://www.linkedin.com/in/pini-winer/">linkedin</a>
     

      
       
          <FaPhone id="FaPhone2id" className="icon ps-2" data-tip="Call Phone" /><a href="+972556696487">(+972) 055-6696487</a>
     
  
      
        <FaWhatsapp
          id="FaWhatsapp2id"
          className="icon ps-2"
          data-tip="My Whatsapp"
          /><a a className="" href="https://wa.me/972556696487">+972556696487 </a>
     

      
        <FaEnvelope
          id="FaLinkedin2id"
          className="icon ps-2"
          data-tip="My Linkedin"
        /><a className="" href="#">piniwiner@gmail.com</a>
          
      
      </div>
     
      </div>
    </div>
  );
}

export default Contact;
