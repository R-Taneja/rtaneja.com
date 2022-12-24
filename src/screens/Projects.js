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

require("typeface-poppins")

function Projects() {
  const navigate = useNavigate();

  return (
    <FadeIn>
      <div className='projectsPage'>
          <FontAwesomeIcon className="backButton" size="xl" icon={faArrowLeft} onClick={() => {navigate("/")}} />
          <h2 className='projectsHeader'>Featured Projects</h2>
          <button className="githubButton" onClick={() => {window.open("https://github.com/R-Taneja")}}>More on GitHub &nbsp;<FontAwesomeIcon icon={faUpRightFromSquare} /></button>
          <div className="projects">
            <Project title='Noted' description='A note-taking app for the macOS menu bar' language='</>  Swift • 1.5K+ downloads • 4.6 &#9733;' link='https://apps.apple.com/us/app/noted/id1541403993' logo={notedLogo} />
            <Project title='Rapid Test Collector' description='A tool to collect and verify COVID-19 rapid test results' language='</>  React' link='https://www.rapidtestcollector.com' logo={rapidTestLogo} />
            <Project title='Word Frequency' description='A website that points out overused words in writing' language='</>  HTML, CSS, & JS' link='https://wordfrequency.app/' logo={wordFreqLogo} />
            <Project title='Blokker' description='The first practical Instagram blocker for Chrome' language='</>  Chrome Extension' link='https://github.com/R-Taneja/Blokker' logo={blokkerLogo} />
            <Project title='DriveTest Bot' description='A Selenium bot that checks for road test dates' language='</>  Python' link='https://github.com/R-Taneja/DriveTest-Date-Checker' logo={driveTestLogo} />
            <Project title='Grade Distribution Quiz' description='Match the grade distribution to the UC Berkeley course' language='</>  React' link='https://grade-distribution-guesser.vercel.app' logo={gradeDistLogo} />
          </div>
      </div>
    </FadeIn>
  )
}

export default Projects