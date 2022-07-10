import '../App.css';

function Project({ title, description, language, link }) {
    const handleProjectClick = () => {
        window.open(link);
    }

    return (
        <div className='projectContainer' onClick={handleProjectClick} style={{ cursor: 'pointer' }}>
            <h3 className='projectTitle'>{title}</h3>
            <p className='projectDescription'>{description}</p>
            <p className='projectLanguage'>{language}</p>
        </div>
    )
}

export default Project
