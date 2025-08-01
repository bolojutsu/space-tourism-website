import Home from './pages/home/home.jsx'
import CrewCommander from './pages/crew commander/crewCommander.jsx'
import Destination from './pages/destinations/destination.jsx';
import Technology from './pages/technology/technology.jsx';
import { useState } from 'react'
import Header from './components/header.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'crew-commander':
        return <CrewCommander setCurrentPage={setCurrentPage} />
      case 'destination':
        return <Destination setCurrentPage={setCurrentPage} />
      case 'technology':
        return <Technology setCurrentPage={setCurrentPage} />
    }
  }
  return (
    <>
      <div >
        <Header setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div >
    </>

  )
}

export default App
