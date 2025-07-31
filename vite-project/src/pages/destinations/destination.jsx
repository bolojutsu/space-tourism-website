import Header from '../../components/header.jsx';
import './destination.css';
import destinationData from '../../data.json';
import { useState } from 'react';



function Destination({ setCurrentPage }) {

    const [selectedDestination, setSelectedDestination] = useState(destinationData.destinations[0]);

    const showLocation = (destinationName) => {
        const destination = destinationData.destinations.find(
            dest => dest.name.toUpperCase() === destinationName
        );
        if (destination) {
            setSelectedDestination(destination);
        }
    }

    return (
        <div className='destination-background'>
            <Header setCurrentPage={setCurrentPage} />

            <div className="destination-header">
                PICK YOUR DESTINATION
            </div>

            <div className="destination-location">
                {destinationData.destinations.map((dest) => (
                    <button key={dest.name} onClick={() => showLocation(dest.name.toUpperCase())}
                        className={selectedDestination.name === dest.name ? 'active' : ''}
                    >
                        {dest.name.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="destination-content">
                <img src={selectedDestination.images.png} alt={selectedDestination.name} className="destination-image" />
                <div className="destination-details">
                    <h2>{selectedDestination.name}</h2>
                    <p>{selectedDestination.description}</p>
                    <hr />
                    <div className="destination-stats">
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <p>{selectedDestination.distance}</p>
                        </div>
                        <div>
                            <h3>EST. TRAVEL TIME</h3>
                            <p>{selectedDestination.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination