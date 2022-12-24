import '../App.css';
import profilePicture from '../img/pfp.jpg';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

require("typeface-poppins")

function Home() {
  const handleContactButtonClick = () => {
    window.open("mailto:rohan.taneja@berkeley.edu?subject=RE: rtaneja.com");
  };

  const navigate = useNavigate();
  const handleProjectsButtonClick = () => {
    navigate("/projects");
  };

  return (
    <FadeIn>
      <div className='homePage'>
        <img className='pfp' src={profilePicture} alt="Rohan Taneja" />
        <h1 className='name'>Rohan Taneja</h1>
        <h3 className='subtitle'>Developer studying EECS + Business @ UC Berkeley</h3>
        <div className='homeButtons'>
          <button className='contactButton' onClick={handleContactButtonClick}>Contact me</button>
          <button className='projectsButton' onClick={handleProjectsButtonClick}>Projects &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className='socials'>
          <FontAwesomeIcon icon={faLinkedin} size="xl" onClick={() => window.open("https://www.linkedin.com/in/rohan-taneja/")} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faInstagram} size="xl" onClick={() => window.open("https://www.instagram.com/r.taneja_/")} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faTwitter} size="xl" onClick={() => window.open("https://twitter.com/rtaneja_")} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </FadeIn>
  );
}

export default Home;
