import '../App.css';

function Project({ title, description, language, link, logo }) {
    const handleProjectClick = () => {
        window.open(link);
    }

    return (
        <div className='projectContainer' onClick={handleProjectClick}>
            <div className='logoSection'>
                <img className='logo' src={logo} alt='Project logo' />
            </div>
            <div className='projectInfoSection'>
                <h3 className='projectTitle'>{title}</h3>
                <p className='projectDescription'>{description}</p>
                <p className='projectLanguage'>{language}</p>
            </div>
        </div>
    )
}

export default Project
