import React, { useState } from 'react'
import Pillar_PopUp from './Pillar_PopUp.jsx'

function Pillar_layout({ pillar_data }) {
   const [selectedPillar, set_selectedPillar] = useState(null);
   const handlePillarClick = (index) => {
      set_selectedPillar(pillar_data[index]);
   };
   
   return (
      <>
         <svg width="2000" height="600">
            {pillar_data.map((pillar, index) => (
               <polygon
                  key={index}
                  points={pillar.coordinates.map(coord => `${coord.x},${coord.y}`).join(' ')}
                  fill={pillar.color}
                  stroke='black'
                  strokeWidth={2}
                  onClick={() => handlePillarClick(index)}
               />
            ))}

         </svg>
         {selectedPillar && (
            <div className='popup'>
               <Pillar_PopUp pillar={selectedPillar} closePopup={set_selectedPillar} />
            </div>
         )}
      </>
   )
}

export default Pillar_layout