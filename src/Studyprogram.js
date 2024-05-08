import React from "react";
import './Studyprogram.css'
import logo from './Images/Logo.png'

function Studyprogram() {
  
  return (
    <div className="page">
    <div className="Header">
      <img className="logo" src={logo} alt="1"/>
      <div className="en-apply">
      <h5 className="Enquire-Now">Enquire Now</h5>
      <h5 className="Apply-to-University">Apply to University</h5>
      </div>
    </div>
    <section className="Section-1" >
        <div className="Section-1.1">
            <div className="Heading-1">
                <h1>Find The BestStudy Abroad Program</h1>
                <h3>Search and compare as many study programs as you want</h3>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Studyprogram;
