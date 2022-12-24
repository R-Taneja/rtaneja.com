import './App.css';
import profilePicture from './img/pfp.jpg';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

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
      </div>
    </FadeIn>
  );
}

export default Home;
