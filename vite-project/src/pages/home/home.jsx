import Header from '../../components/header.jsx';
import './home.css'
function Home({ setCurrentPage }) {
    return (
        <>
            <div className="home-background">
                <div className="home-main-section">
                    <div className="home-header-background">
                        <div className="home-header">
                            <p className="home-p1">SO, YOU WANT TO TRAVEL TO </p>
                            <p className="home-p2">
                                SPACE
                            </p>
                        </div>
                        <p className="home-sub-header">Let's face it: if you ant to go to space, you might as well genuenly go to outer space and not over kind of on the edge of it. well sit back and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className="home-explore">Explore</div>
                </div>

            </div>
        </>
    )
}

export default Home