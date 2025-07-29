import './home.css'
function Home({ setCurrentPage }) {
    return (
        <>
            <div className="background">
                <nav className="nav-bar">
                    <img src="/assets/shared/logo.svg" alt="Space Tourism Logo" />
                    <hr />
                    <div className="nav-links">
                        <button onClick={() => setCurrentPage('home')}>00 Home</button>
                        <button onClick={() => setCurrentPage('destination')}>01 Destination</button>
                        <button onClick={() => setCurrentPage('crew-commander')}>02 Crew</button>
                        <button onClick={() => setCurrentPage('technology')}>03 Technology</button>
                    </div>
                </nav>

                <div className="main-section">
                    <div className="header-background">
                        <div className="header">
                            <p className="p1">SO, YOU WANT TO TRAVEL TO </p>
                            <p className="p2">
                                SPACE
                            </p>
                        </div>
                        <p className="sub-header">Let's face it: if you ant to go to space, you might as well genuenly go to outer space and not over kindof on the edge of it. well sit back and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className="explore">Explore</div>
                </div>

            </div>
        </>
    )
}

export default Home