import '../App.css';
import profilePicture from '../img/pfp.webp';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

require("typeface-poppins")

function Home() {
  const navigate = useNavigate();

  return (
    <FadeIn>
      <div className='homePage'>
        <img className='pfp' src={profilePicture} alt="Rohan Taneja" />
        <h1 className='name'>Rohan Taneja</h1>
        <h3 className='subtitle'>EECS + Business @ <a href="https://met.berkeley.edu" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: "blue" }}>UC Berkeley M.E.T.</a></h3>
        <div className='homeButtons'>
          <button className='contactButton' onClick={() => {window.open("mailto:rohan.taneja@berkeley.edu?subject=RE: rtaneja.com")}}>Contact me</button>
          <button className='projectsButton' onClick={() => {navigate("/projects")}}>Projects &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className='socials'>
          <FontAwesomeIcon icon={faLinkedin} size="xl" onClick={() => window.open("https://www.linkedin.com/in/rohan-taneja/")} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faInstagram} size="xl" onClick={() => window.open("https://www.instagram.com/r.taneja_/")} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faTwitter} size="xl" onClick={() => window.open("https://twitter.com/rtaneja_")} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faGithub} size="xl" onClick={() => window.open("https://github.com/R-Taneja")} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </FadeIn>
  );
}

export default Home;
