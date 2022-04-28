import React, { useState, useEffect } from "react";
import { json_ar } from "../jsonworks.js";


function Works(props) {
  const [style, setStyle] = useState({ display: "none" });

  console.log(json_ar);
  return (
    <div className="container-fluid d-md-grid pt-5">
      <div className="row  d-flex justify-content-center  ">
        <h2 id="workid" className="text-center text-decoration-underline">
          My Portfolio
        </h2>

        
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="100"
          className="col-lg-10   shadow m-2 workid  d-flex "
          
        >
          <img src="cover2.jpg" className=" p-3 d-none d-lg-block
" height="" />
          <div className="p-5">
            <h2 className=" h1 ">Big Project</h2>

            <div className="">Huge project with server side use nodejs   real shop like ebay </div>

            <div className="d-flex jusify-content-between m-1 p-1">
              <a href="#">
                <button className="btn btn-outline-info   m-1">View Web</button>
              </a>
              <a href="#">
                <button className="btn  btn-outline-info  m-1  ">View Code</button>
              </a>
              <a href="#">
                <button className="btn  btn-outline-info  m-1  ">
                  View server Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {json_ar.map((item) => {
          return (
            <div
              data-aos="flip-up"
              data-aos-delay={item.aos}
              className="col-md-5   shadow m-2 workid  d-flex "
            >
              <img src={item.image} className=" " height="" />
              <div className="p-2">
                <h5 className=" ">{item.name} </h5>

                <div className="">{item.descrption} </div>

                <div className="d-flex jusify-content-center m-1 p-1">
                  <a href={item.netifly}>
                    <button className="btn  btn-outline-info  m-1">View Web</button>
                  </a>
                  <a href={item.git}>
                    <button className="btn  btn-outline-info m-1  ">View Code</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        

      </div>
    </div>
  );
}

export default Works;
