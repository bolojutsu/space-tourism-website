import './header.css'
function Header({ setCurrentPage }) {
    return (
        <div className='nav-bar-background'>
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
        </div>

    )
}
export default Header