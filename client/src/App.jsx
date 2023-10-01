import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

// importing all the instrument components
import StressCell from './components/Instrument Pages/StressCell'
import AWTT from './components/Instrument Pages/AWTT'
import DHTT from './components/Instrument Pages/DHTT'
import RTT from './components/Instrument Pages/RTT'
import RCI from './components/Instrument Pages/RCI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import SVGComponent from './SVGComponent.jsx';
// import Quadrilateral from './components/Quadrilateral'
import Pillar_layout from './components/Pillar_layout'

// importing pillar data
import jsonData from './components/data/pillars.json'

function App() {
  const pillars = jsonData;

  return (
    <>
      <div className="App">
        <Header/>
        <Pillar_layout pillar_data={pillars}/>
      </div>
    </>
  );
}

export default App
