import Header from '../../components/header';
import techData from '../../data.json'
import './technology.css'
import { useState } from 'react'

function Technology({ setCurrentPage }) {

    const [launchStep, setLaunchStep] = useState(techData.technology[0]);
    const showLaunchStep = (techName) => {
        const selectedTech = techData.technology.find(
            (step) => step.name === techName
        );

        if (selectedTech) {
            setLaunchStep(selectedTech)
        }
    }

    return (
        <div className="tech-background">
            <div className="tech-header">
                SPACE LAUNCH 101
            </div>

            <div className="technology-content">
                <div className="tech-nav">
                    {techData.technology.map((tech, index) => (
                        <button key={tech.name}
                            className={launchStep.name === tech.name ? 'active' : ''}
                            onClick={() => showLaunchStep(tech.name)}>
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className="tech-details">
                    <h2>The Terminolgy...</h2>
                    <h1>{launchStep.name.toUpperCase()}</h1>
                    <p>{launchStep.description}</p>
                </div>

                <div className="tech-image">
                    <picture>
                        <source media="(max-width: 768px)"
                            srcSet={launchStep.images.landscape}
                        />
                        <img src={launchStep.images.portrait} alt={launchStep.name} />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Technology