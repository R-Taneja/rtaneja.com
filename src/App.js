import './App.css';
import profilePicture from './img/pfp.jpg';
import Project from './components/Project';
import FadeIn from 'react-fade-in';

require("typeface-poppins")

function App() {
  const handleContactButtonClick = () => {
    window.open("https://form.typeform.com/to/sM2EqIbO");
  };

  const handleGitHubButtonClick = () => {
    window.open("https://github.com/R-Taneja");
  };

  return (
    <div className="App">
      <FadeIn>
        <img className='pfp' src={profilePicture} alt="Rohan Taneja" />
        <h1 className='name'>Rohan Taneja</h1>
        <h3 className='subtitle'>Developer studying EECS + Business @ UC Berkeley</h3>
        <button className='contactButton' onClick={handleContactButtonClick}>Contact me</button>
        <h2 className='skillsHeader'>Skills</h2>
        <div className='skills'>
          <h3 className='skillTitle'>Python</h3>
          <h3 className='skillTitle'>Java</h3>
          <h3 className='skillTitle'>SQL</h3>
          <h3 className='skillTitle'>Flutter (Dart)</h3>
          <h3 className='skillTitle'>React (HTML, CSS, &amp; JS)</h3>
          <h3 className='skillTitle'>Firebase</h3>
        </div>
        <h2 className='projectsHeader'>Projects</h2>
        <div className="projects">
          <Project title='Blokker' description='The first practical Instagram blocker for Chrome' language='</>  Chrome Extension' link='https://chrome.google.com/webstore/detail/blokker/hjjnncppnmjkaaafolbifjgnmffgaenl' />
          <Project title='Rapid Test Collector' description='A tool to collect and verify COVID-19 rapid test results from a group' language='</>  React' link='https://www.rapidtestcollector.com' />
          <Project title='Noted' description='A note-taking app for the macOS menu bar' language='</>  Swift • 1.5K+ downloads' link='https://apps.apple.com/us/app/noted/id1541403993' />
          <Project title='Word Frequency' description='A website that points out overused words in writing' language='</>  HTML, CSS, & JS' link='https://wordfrequency.app/' />
          <Project title='DriveTest Bot' description='A Selenium bot that checks for road test dates' language='</>  Python' link='https://github.com/R-Taneja/DriveTest-Date-Checker' />
          <Project title='Grade Distribution Quiz' description='Match the grade distribution to the UC Berkeley course' language='</>  React' link='https://grade-distribution-guesser.vercel.app' />
        </div>
        <button className="githubButton" onClick={handleGitHubButtonClick}>More on GitHub</button>
      </FadeIn>
    </div>
  );
}

export default App;
