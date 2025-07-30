import crewData from '../../data.json'
import './crewCommander.css'
import { useState } from 'react';
function CrewCommander({ setCurrentPage }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCrew = crewData.crew[currentIndex];

    const nextCrew = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % crewData.crew.length);
    }

    const prevCrew = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + crewData.crew.length) % crewData.crew.length);
    }

    return (
        <div className="background">
            <nav className="nav-bar">
                <img src="/assets/shared/logo.svg" alt="" />
                <hr />
                <div className='nav-links'>
                    <button onClick={() => setCurrentPage('home')}>00 Home</button>
                    <button onClick={() => setCurrentPage('destination')}>
                        01 Destination
                    </button>
                    <button onClick={() => setCurrentPage('crew-commander')}>
                        02 Crew
                    </button>
                    <button onClick={() => setCurrentPage('technology')}>
                        03 Technology
                    </button>
                </div>
            </nav>

            <div className="crew-selection">
                <h1>02 MEET YOUR CREW</h1>
                <div className="crew-member">
                    <div className="crew-details">
                        <h2 className="crew-role">{currentCrew.role}</h2>
                        <h3 className='crew-name'>{currentCrew.name}</h3>
                        <p className='crew-bio'>{currentCrew.bio}</p>
                    </div>
                </div>
                <div className='crew-image'>
                    <img src={currentCrew.images.webp} alt={currentCrew.name} className='crew-image' />
                </div>
                <div className='crew-dots'>
                    {crewData.crew.map((_, index) => {
                        let className;
                        if (index === 0) {
                            className = 'active-dot';
                        } else {
                            className = 'dot';
                        }
                        return <span key={index} className={className}></span>
                    })}
                </div>
                <div className='crew-navigation'>
                    <button onClick={prevCrew}>Previous</button>
                    <button onClick={nextCrew}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default CrewCommander