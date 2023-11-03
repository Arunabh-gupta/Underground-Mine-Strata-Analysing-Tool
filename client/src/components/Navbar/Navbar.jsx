import React, { useState } from 'react';
import '../Navbar/Navbar.css'
import locations from '../data/Locations.json'
import Roof_Fall_Info from '../Roof_fall /Roof_Fall_Data_Form';
import Add_Daily_extraction from '../Add_Daily_Extraction/Add_Daily_extraction';
import Roof_Fall_Data_Form from '../Roof_fall /Roof_Fall_Data_Form';

function Navbar({setselectedMarker, instrument_data}) {
  // Define state for the selected option in each dropdown
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRoofFall, setSelectedRoofFall] = useState('');
  const [addDailyExtractionForm, setaddDailyExtractionForm] = useState(null);
  const [addRoofFallDataFrom, setaddRoofFallDataForm] = useState(null)
  // Define the options for the "Find Location" and "Roof Falls" dropdowns
  const locationOptions = locations;

  const roofFallOptions = [
    'Roof fall 1',
    'Roof fall 2',
    'Roof fall 3',
    // Add more roof falls as needed
  ];

  // Handle the selection change for the "Find Location" dropdown
  const handleLocationChange = (event) => {
    const selectedLocationData = locations.find((location) => location === event.target.value);
    setSelectedLocation(selectedLocationData);
    for (let index = 0; index < instrument_data.length; index++) {
      const element = instrument_data[index];
      if(element.location === selectedLocationData){
        setselectedMarker(element);
        break;
      }
      
    }
    // setPopupVisible(true);
  };

  // Handle the selection change for the "Roof Falls" dropdown
  const handleRoofFallChange = (event) => {
    setSelectedRoofFall(event.target.value);
  };

  // Handle Roof fall form
  const handleRoofFallForm = ()=>{
    setSelectedRoofFall(true);
  }
  return (
    <div className="navbar">
      <div className="dropdown">
        <label htmlFor="locationDropdown">Find Location:</label>
        <select
          id="locationDropdown"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select Location</option>
          {locationOptions.map((location, index) => (
            <option key={index} value={location} className='locationOption'>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="roofFallDropdown">Roof Falls:</label>
        <select
          id="roofFallDropdown"
          value={selectedRoofFall}
          onChange={handleRoofFallChange}
        >
          <option value="">Select Roof Fall</option>
          {roofFallOptions.map((roofFall, index) => (
            <option key={index} value={roofFall} className='roofFallOption'>
              {roofFall}
            </option>
          ))}
        </select>
        {selectedRoofFall && (
          <div className='roofFall'>
            <Roof_Fall_Info closeInfoPopup={setSelectedRoofFall} info={info}/>
          </div>
        )}
      </div>
      <div className='addDailyExtraction'>
          <button onClick={setaddDailyExtractionForm}>Add Daily Extraction Data</button>
      </div>
      {addDailyExtractionForm && 
        <div className="DailyExtractionForm">
          <Add_Daily_extraction closeForm={setaddDailyExtractionForm} />
        </div>
      }
      <div className="AddRoofFallData">
        <button onClick={setaddRoofFallDataForm}>Add Roof Fall Info</button>
      </div>
      {addRoofFallDataFrom &&
        <div className="RoofFallDataForm">
          <Roof_Fall_Data_Form closeForm={setaddRoofFallDataForm}/>
        </div> 
      }
    </div>
  );
}

export default Navbar;
