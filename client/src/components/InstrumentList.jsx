import React, { useState } from 'react'
import "./css/popup.css";
import Instrument_Component from './Instrument_Component';
import Show_Entry from './Show_Entry_Components/Show_Entry';
function InstrumentList({ MarkerData, closeList }) {
  const [openForm, setopenForm] = useState(false);
  const [openEntries, setopenEntries] = useState(false);
  const [info, setInfo] = useState({});
  const OpenFormFunc = (name, RefNo) => {
    setopenForm(true);
    setInfo({
      name: name,
      RefNo: RefNo,
      Location: MarkerData.location 
    });
  }
  const OpenEntriesFunc = (name, RefNo) => {
    setopenEntries(true);
    setInfo({
      name: name,
      RefNo: RefNo,
      Location: MarkerData.location 
    });
    
  }
  return (
    <>
      <div className='PopUp_Background'>
        <div className='PopUp_container'>
          <div className='closeButton'>
            <button onClick={() => closeList(null)}>X</button>
          </div>
          <div className='title'>
            <h2>Instruments Installed Here</h2>
          </div>
          <div className="Instrument_list">
            <ul>
              {MarkerData.instruments.map((data, index) => (
                <li key={index}>
                  <span>{data.name}</span>
                  <span>{data.reference_no}</span>
                  <button onClick={() => OpenEntriesFunc(data.name, data.reference_no)}>Show Entries</button>
                  <button onClick={() => OpenFormFunc(data.name, data.reference_no)}>Add Entry</button>
                </li>
              ))}
            </ul>
            {openForm && (
              <div className="Instrument_form">
                <Instrument_Component info={info} closeForm={setopenForm}/>
              </div>
            )}
            {openEntries && (
              <div className="Values_List">
                <Show_Entry info={info} onClose={setopenEntries}/>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default InstrumentList