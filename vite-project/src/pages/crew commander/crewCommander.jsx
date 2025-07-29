import crewData from '../../data.json'
import './crewCommander.css'
function CrewCommander({ setCurrentPage }) {
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
                {crewData.crew.map((crewMember, index) => (
                    <div key={index} className="crew-member">
                        <div className="crew-details">
                            <h2>{crewMember.role}</h2>
                            <h3>{crewMember.name}</h3>
                            <p>{crewMember.bio}</p>
                        </div>

                        <div className="crew-image">
                            <img src={crewMember.images.webp} alt={crewMember.name}
                                className="crew-img"
                            />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default CrewCommander