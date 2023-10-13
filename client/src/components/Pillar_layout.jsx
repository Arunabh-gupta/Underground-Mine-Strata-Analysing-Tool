import React, { useEffect, useState } from 'react'
import Pillar_PopUp from './Pillar_PopUp.jsx'
import InstrumentList from './InstrumentList.jsx';
import Navbar from '../components/Navbar/Navbar.jsx'
import './css/instrument_marker.css'

import DIPS from "../components/data/Dip and Gallery indexing/Dips.json"
import GALLERIES from "../components/data/Dip and Gallery indexing/Galleries.json"

function Pillar_layout({ pillar_data, instrument_data }) {
   const [selectedPillar, setselectedPillar] = useState(null);
   const handlePillarClick = (index) => {
      setselectedPillar(pillar_data[index]);
   };

   const [selectedMarker, setselectedMarker] = useState(null);

   const handleInstrumentClick = (index) => {
      setselectedMarker(instrument_data[index]);
   };
   // useEffect(() => {
   //    console.log(DIPS);
   //  });

   return (
      <>
         <Navbar setselectedMarker={setselectedMarker} instrument_data={instrument_data} />
         {/* Rendering Navbar on top of mine layout  */}
         <svg width="2000" height="1000">
            {/* Rendering all the pillars */}
            {pillar_data.map((pillar, index) => (
               <polygon
                  key={index}
                  points={pillar.coordinates.map(coord => `${coord.x},${coord.y}`).join(' ')}
                  fill={pillar.color}
                  stroke='black'
                  strokeWidth={1}
                  onClick={() => handlePillarClick(index)}
               />
            ))}
            {/*  Rendering markers of all the instruments*/}
            {instrument_data.map((instrument, index) => (
               <circle
                  key={index}
                  cx={instrument.coordinate.x}
                  cy={instrument.coordinate.y}
                  r={7}
                  fill={instrument_data[index] === selectedMarker ? "red" : "white"}
                  stroke="black"
                  strokeWidth={1}
                  onClick={() => handleInstrumentClick(index)}
               />
            ))}
            {/* Rendering Dip Labels */}
            {DIPS.map((dip, index) => (
               <text x={dip.displayPoint.x} y={dip.displayPoint.y} fill="black" key={index}>
                  {dip.label}
               </text>
            ))}
            {/* Rendering Gallery Labels */}
            {GALLERIES.map((gallery, index) => (
               <text x={gallery.displayPoint.x} y={gallery.displayPoint.y} fill="black" key={index}>
                  {gallery.label}
               </text>
            ))}
            {/* <text x="0" y="15" fill="red">I love SVG!</text> */}
         </svg>
         {selectedPillar && (
            <div className='popup'>
               <Pillar_PopUp pillar={selectedPillar} closePopup={setselectedPillar} />
            </div>
         )}
         {selectedMarker && (
            <div className="instrument_list">
               <InstrumentList MarkerData={selectedMarker} closeList={setselectedMarker} />
            </div>
         )}
      </>
   )
}

export default Pillar_layout