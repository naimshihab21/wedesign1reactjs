import React from "react";
import Container from 'react-bootstrap/Container';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';


const Part2 = () => {
  return (  
    <>
      <section className="section-part2">
        <Container>
          <h6>Featured Universities</h6>

          <div className="image-university">
            <img src={img1} className="img1" />
            <img src={img2} className="img2" />
            <img src={img3} className="img3" />
            <img src={img4} className="img4" />
          </div>

        </Container>
      </section>
    </>
  );
}
 
export default Part2;