import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from '../components/Project';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { faArrowLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import blokkerLogo from '../img/blokker.webp';
import rapidTestLogo from '../img/rapidtest.webp';
import wordFreqLogo from '../img/wordfreq.webp';
import driveTestLogo from '../img/driveTestLogo.webp';
import gradeDistLogo from '../img/gradeDistLogo.webp';
import notedLogo from '../img/notedLogo.webp';
import auxifyLogo from '../img/auxifyLogo.webp';

require("typeface-poppins")

function Projects() {
  const navigate = useNavigate();

  return (
    <FadeIn>
      <div className='projectsPage'>
          <FontAwesomeIcon className="backButton" size="xl" icon={faArrowLeft} onClick={() => {navigate("/")}} />
          <h2 className='projectsHeader'>Featured Projects</h2>
          <div className="projects">
            <Project title='Noted' description='Jot down thoughts and ideas instantly with this convenient note-taking app for the macOS menu bar' language='</>  Swift • 1.5K+ downloads • 4.6 &#9733;' link='https://apps.apple.com/us/app/noted/id1541403993' logo={notedLogo} />
            <Project title='Auxify' description='Create interactive listening experiences by making your Spotify queue collaborative' language='</>  React' link='https://www.auxify.io' logo={auxifyLogo} />
            <Project title='Rapid Test Collector' description='Host events safely by collecting COVID-19 test results from attendees' language='</>  React' link='https://rapid-test-collector.vercel.app' logo={rapidTestLogo} />
            <Project title='Word Frequency Tool' description='Write with clarity by cutting down on repeated words' language='</>  HTML, CSS, & JS' link='https://wordfrequency.vercel.app' logo={wordFreqLogo} />
            <Project title='Blokker' description='Stay focused while using Instagram by blocking only the most distracting features' language='</>  Chrome Extension' link='https://github.com/R-Taneja/Blokker' logo={blokkerLogo} />
            <Project title='DriveTest Bot' description="Get your Ontario driver's license faster with this bot that checks for available road test dates in seconds" language='</>  Python' link='https://github.com/R-Taneja/DriveTest-Date-Checker' logo={driveTestLogo} />
            <Project title='Grade Distribution Quiz' description='Test your knowledge of UC Berkeley course grade distributions with this game!' language='</>  React' link='https://grade-distribution.vercel.app' logo={gradeDistLogo} />
          </div>
          <button className="githubButton" onClick={() => {window.open("https://github.com/R-Taneja")}}>More on GitHub &nbsp;<FontAwesomeIcon icon={faUpRightFromSquare} /></button>
      </div>
    </FadeIn>
  )
}

export default Projects