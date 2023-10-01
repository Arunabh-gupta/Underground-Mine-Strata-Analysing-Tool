import React, { useState } from 'react';
import PopUp from './PopUp';
const Quadrilateral = ({ quadrilateral_data }) => {

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    // console.log("I was clicked")
    setShowInfo(!showInfo);
  };

  return (
    <svg width="300" height="300" >
      <polygon points={quadrilateral_data.coordinates.map(coord => `${coord.x},${coord.y}`).join(' ')} fill="white" stroke='black' strokeWidth={2} onClick={toggleInfo}/>
      {showInfo && (
        <foreignObject x={quadrilateral_data.coordinates[3].x} y={quadrilateral_data.coordinates[3].y + 30} width="300" height="100">
          <div className="popup">
            <PopUp quadrilateral_data={quadrilateral_data} />
          </div>
        </foreignObject>
        )
        }
    </svg>
  );
};

export default Quadrilateral;
