import React from 'react'
import '../Roof_fall /Roof_Fall_Data_Form.css'
function Roof_Fall_Data_Form({ closeForm }) {
  return (
    <>
      <div className="Form_Background">
        <form action="">
          <div className="Form_Container">
            <div className='closeButton'>
              <button onClick={() => closeForm(null)}>X</button>
            </div>
            <div className="formBody">
              <div className="Date">
                <label htmlFor="">Date: </label>
                <input type="date" name="" id="" />
              </div>
              <div className="Time">
                <label htmlFor="">Time: </label>
                <input type="time" name="" id="" />
              </div>
              <div className="TypeOfFall">
                <label htmlFor="">Type Of Fall: </label>
                <input type="radio" name="fallType" id="mainFall" value="mainFall" /> Main Fall
                <input type="radio" name="fallType" id="localFall" value="localFall" /> Local Fall
              </div>
              <div className="RoofFallNo">
                <label htmlFor="">Roof Fall No.</label>
                <input type="number" name="" id="" />
              </div>
              <div className="Area of Fall">
                <label htmlFor="">Area Of Fall: </label>
                <input type="number" name="" id="" />
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Roof_Fall_Data_Form