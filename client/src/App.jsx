import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pillar_layout from './components/Pillar_layout'

// importing pillar data
import pillarJSON from './components/data/pillars.json'
import instrumentJSON from './components/data/instruments.json'

function App() {
  const pillars = pillarJSON;
  const instruments = instrumentJSON;
  return (
    <>
      <div className="App">
        <Header/>
        <Pillar_layout pillar_data={pillars} instrument_data={instruments}/>
      </div>
    </>
  );
}

export default App
