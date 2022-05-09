
import React, {useState} from "react";
import Works from "./works";

import { FaDownload,FaGithub,FaLinkedin,FaEnvelope,FaPhone,FaWhatsapp,FaBars } from "react-icons/fa";
import Contact from "./contact";
import Footer from "./footer";
import Skills from "./skills";
import Headerstory from "./Headerstory";
function AppPini(props) {

  let audio = new Audio("/click2.wav")
  let stop = true;
  
 
  const start = () => {
   
      
      audio.play()
  }
 


  return (
    
    <div id="idborder" className="container-fluid " >

      <Headerstory/>
      <Skills/>
      <Works  />
      <Contact/>
     
     
 <div className="side">
      <a href="#"onMouseOver={start}>< FaGithub id="FaGithubid"  className="icon" data-tip=" My Github"/></a>
        <a href="https://www.linkedin.com/in/pini-winer/" onMouseOver={start}> < FaLinkedin id="FaLinkedinid"  className="icon"  data-tip="My Linkedin"/></a> 
      <a href="tel:+972548463456"> < FaPhone id="FaPhoneid" className="icon" data-tip="Call Phone" /></a> 
        <a href="https://wa.me/972556696487" onMouseOver={start}
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"> < FaWhatsapp id="FaWhatsappid"  className="icon"  data-tip="My Whatsapp" /></a> 

        

         <a  href="mailto:piniwiner@gmail.com" id="vertiid"   data-tip="Back to top"  onMouseOver={start} ><div className="vl"></div> <span id="vertiid"   data-tip="Send Email " >piniwiner<span id="shtruid">@</span>gmail.com</span></a>
       
         </div>
         <Footer/>
    </div>
  );
}
{
}

export default AppPini;
