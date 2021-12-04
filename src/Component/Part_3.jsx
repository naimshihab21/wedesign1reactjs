import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';


const Part3 = () => {

  return (  
    <>
      <div className="our-service">
        <Container>
          <h4>Our Services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis beatae nesciunt molestiae repudiandae rerum aut, eius libero ut, sint adipisci culpa distinctio aliquam excepturi.</p>
          <div className="card-our">
            <div className="career-conseling">
              <h6> Career Conseling </h6>
              <p className="paragraf-our-service"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ex. Ratione fugit porro repellendus odio. Lorem ipsum dolor sit amet. </p>
              <Link to="/careerconseling"> Learn More <BsArrowRightShort className="arrow-right" /> </Link>
            </div>
            <div className="university-admission">
              <h6> University Admission </h6>
              <p className="paragraf-our-service"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ex. Ratione fugit porro repellendus odio. Lorem ipsum dolor sit amet. </p>
              <Link to="/universityadmission"> Learn More <BsArrowRightShort className="arrow-right" /> </Link>
            </div>
            <div className="visa-consultancy">
              <h6> Visa Consultancy </h6>
              <p className="paragraf-our-service"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ex. Ratione fugit porro repellendus odio. Lorem ipsum dolor sit amet. </p>
              <Link to="/visaconsultancy"> Learn More <BsArrowRightShort className="arrow-right" /> </Link>
            </div>
          </div>
          <div className="combine-two-card">
              <div className="accommodation">
                <h6> Accommodation </h6>
                <p className="paragraf-our-service"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ex. Ratione fugit porro repellendus odio. Lorem ipsum dolor sit amet. </p>
                <Link to="/accommodation"> Learn More <BsArrowRightShort className="arrow-right" /> </Link>
              </div>
              <div className="pre-departure-briefing">
                <h6> Pre-Departure Briefing </h6>
                <p className="paragraf-our-service"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ex. Ratione fugit porro repellendus odio. Lorem ipsum dolor sit amet. </p>
                <Link to="/predeparturebriefing"> Learn More <BsArrowRightShort className="arrow-right" /> </Link>
              </div>
            </div>

        </Container>
      </div>
    </>
  );
}
 
export default Part3;