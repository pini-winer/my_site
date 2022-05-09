import React, { useState } from "react";
import { ArrowRight, ThreeDotsVertical } from 'react-bootstrap-icons';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaBars, FaHamburger } from "react-icons/fa";
function Headerstory(props) {
  const [style, setStyle] = useState("none");



  const clickburger = () => {

    setStyle(style === "block" ? "none" : "block");
    console.log(style)
  }


  return (
    <div >

      <div onClick={clickburger} className="  burger d-md-none display-6 text-center pt-4 " id="burgerid">
        <button className="btn"><FaBars /></button>
      </div >
      <div id="id_header" className=" d-flex justify-content-around container ">
        <div id="id_logo" className="ml-5">

        </div>

        <nav className="nav_mob text-center d-md-none " id="nav_mo" style={{ display: style }}
        >
          <a href="#">Home</a>
          <a href="#helloid">Works</a>
          <a href="#contactid">Contact</a>


        </nav>

        <div className="nav_bar">
          <nav className="d-flex justify-content-end p-4 container  ">
            <div className="p-4" >
              <a href="#"> Home</a>
            </div>
            <div className="p-4 link" >
              <a href="#helloid"> story</a>

            </div>
            <div className="p-4  " >
              <a href="#workid"> Works</a>
            </div>
            <div className="p-4 link" >
              <a href="#contactid">Contact</a>




            </div>
          </nav>
        </div>
        <div></div>
      </div>
      <main className="container p-5">
        <div className="row">
          <div className="picw col-lg-4  p-4 ">
            <div>
              <img id="yizimg" src="pp.jpg" height="200" />


            </div>
          </div>
          <div className="col-lg-8">
            <h1>
              {" "}
              <span className="bigName">pini winer</span>
            </h1>
            <h3>full stack developer.</h3>
            <br/>
            <br/>
            <h4>
              My name is Pini Winer, married to Leah with two wonderful children. I have experience in project management, managing client portfolios and meeting pressing deadlines.
              I learn fast and I know what it takes to bridge gaps by myself. Over the last year I took an intensive programming course to add those technical tools to my project management toolkit and pursue a career in tech.

              
            </h4>
            <br />
            <br />
            <br />
            <div className="m-2 text-center" data-tip="Tap to download ">
              Download
              <a href="Pini_Winer-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FaDownload id="fadwon" />
              </a>
              Resume
            </div>
          </div>


        </div>
        <script src="C:\start_react\reactprojects\yiz\src\yiz\burger.js"></script>
      </main>
    </div>
  );
}

export default Headerstory;
