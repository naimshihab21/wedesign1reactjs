import React from "react";
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Part1 = () => {
  return (  

    <>
      <Container className="container">
        <header>
          <nav>
            <div className="title">
              <h3>Executive</h3>
              <p>study abroad</p>
            </div>
            <div className="menu">
              <ul>
                <Link to="/">
                  <li> Home </li>
                </Link>
                <Link to="/fu">
                  <li> Featured Universities </li>
                </Link>
                <Link to="/ourservice">
                  <li> Our Service </li>
                </Link>
                <button type="button">Apply</button>
              </ul>
            </div>
          </nav>
        </header>

        <section className="section-part1">
          <div className="main-article">
            <h1>We Help to <span>Build</span></h1>
            <h1 className="Your-Dream">Your Dream</h1>
            <p className="main-sentence">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, temporibus tempora. Illum, maxime itaque. Omnis aperiam fugiat cumque modi consequuntur? Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus consectetur distinctio perferendis mollitia in, nesciunt illum magnam recusandae, velit, blanditiis earum aliquam eaque soluta iusto sit vel fuga quia?
            </p>
            <button type="button">Apply Online <BsArrowRightShort className="arrow-right" /> </button>

            <ul>
              <li className="facebook"> <BsFacebook /> </li>
              <li className="twitter"> <BsTwitter /> </li>
              <li className="instagram"> <BsInstagram /> </li>
            </ul>

          </div>
        </section>

      </Container>
      

    </>
    
    

  );
}
 
export default Part1;