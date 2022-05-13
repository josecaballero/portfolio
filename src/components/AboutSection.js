import home1 from "../img/home1.png";

/* import styled from "styled-components";
 */ import { About, Description, Image, Hide } from "./../styles";

const AboutSection = () => {
  return (
    /* Ojo a la diferencia entre un styled component y
    un componente normal */
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
