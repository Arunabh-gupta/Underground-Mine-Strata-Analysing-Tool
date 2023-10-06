import React, { useState } from 'react'
import Pillar_PopUp from './Pillar_PopUp.jsx'

import './css/instrument_marker.css'
import InstrumentList from './InstrumentList.jsx';
function Pillar_layout({ pillar_data, instrument_data }) {
   const [selectedPillar, set_selectedPillar] = useState(null);
   const handlePillarClick = (index) => {
      set_selectedPillar(pillar_data[index]);
   };
   
   const [selectedMarker, setselectedMarker] = useState(null);
   
   const handleInstrumentClick = (index) => {
      console.log("Marker was clicked")
      setselectedMarker(instrument_data[index]);
   };
   return (
      <>
         <svg width="2000" height="1000">
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
            {instrument_data.map((instrument, index) => (
               <circle
                  key={index}
                  cx={instrument.coordinate.x}
                  cy={instrument.coordinate.y}
                  r={7}
                  fill={index === selectedMarker?"#ff6161" : "white"}
                  stroke="black"
                  strokeWidth="1"
                  onClick={() => handleInstrumentClick(index)}
               />
            ))}

         </svg>
         {selectedPillar && (
            <div className='popup'>
               <Pillar_PopUp pillar={selectedPillar} closePopup={set_selectedPillar} />
            </div>
         )}
         {selectedMarker && (
            <div className="instrument_list">
               <InstrumentList MarkerData={selectedMarker} closeList={setselectedMarker}/>
            </div>
         )}
      </>
   )
}

export default Pillar_layout