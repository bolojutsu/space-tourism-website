import Header from '../../components/header.jsx';
import './home.css'
function Home() {
    return (
        <>
            <div className="background">
                <Header />

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