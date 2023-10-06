import React, { useState } from 'react'
import "./css/popup.css";
import Instrument_Component from './Instrument_Component';
function InstrumentList({ MarkerData, closeList }) {
  const [SelectedInstrumentName, setSelectedInstrumentName] = useState("");
  const [SelectedInstrumentRefNo, setSelectedInstrumentRefNo] = useState(0);
  const OpenForm = (name, RefNo) => {
    setSelectedInstrumentName(name);
    setSelectedInstrumentRefNo(RefNo)
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
                  <button>Show Entries</button>
                  <button onClick={() => OpenForm(data.name, data.reference_no)}>Add Entry</button>
                </li>
              ))}
            </ul>
            {SelectedInstrumentName!="" && (
              <div className="Instrument_form">
                <Instrument_Component name={SelectedInstrumentName} RefNo={SelectedInstrumentRefNo} Location={MarkerData.location} closeForm={SelectedInstrumentName}/>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default InstrumentList