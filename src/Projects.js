import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './components/Project';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { faArrowLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

require("typeface-poppins")

function Projects() {
  const handleGitHubButtonClick = () => {
      window.open("https://github.com/R-Taneja");
  };

  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <FadeIn>
      <div className='projectsPage'>
          <FontAwesomeIcon className="backButton" size="xl" icon={faArrowLeft} onClick={handleBackButtonClick} />
          <h2 className='projectsHeader'>Featured Projects</h2>
          <button className="githubButton" onClick={handleGitHubButtonClick}>More on GitHub &nbsp;<FontAwesomeIcon icon={faUpRightFromSquare} /></button>
          <div className="projects">
              <Project title='Blokker' description='The first practical Instagram blocker for Chrome' language='</>  Chrome Extension' link='https://github.com/R-Taneja/Blokker' />
              <Project title='Rapid Test Collector' description='A tool to collect and verify COVID-19 rapid test results from a group' language='</>  React' link='https://www.rapidtestcollector.com' />
              <Project title='Noted' description='A note-taking app for the macOS menu bar' language='</>  Swift • 1.5K+ downloads • 4.6 &#9733;' link='https://apps.apple.com/us/app/noted/id1541403993' />
              <Project title='Word Frequency' description='A website that points out overused words in writing' language='</>  HTML, CSS, & JS' link='https://wordfrequency.app/' />
              <Project title='DriveTest Bot' description='A Selenium bot that checks for road test dates' language='</>  Python' link='https://github.com/R-Taneja/DriveTest-Date-Checker' />
              <Project title='Grade Distribution Quiz' description='Match the grade distribution to the UC Berkeley course' language='</>  React' link='https://grade-distribution-guesser.vercel.app' />
          </div>
      </div>
    </FadeIn>
  )
}

export default Projects