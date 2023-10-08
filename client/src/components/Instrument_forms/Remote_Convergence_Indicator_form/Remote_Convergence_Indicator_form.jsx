import React from 'react'
import '../Remote_Convergence_Indicator_form/Remote_Convergence_Indicator_form.css'
function Remote_Convergence_Indicator_form({ info, closeForm }) {

  return (
    <>
      <div className="Form_Background">
        <form action="">
          <div className="Form_Container">
            <div className="closeButton">
              <button onClick={() => closeForm(null)}>X</button>
            </div>
            <div className="Name">
              <span>{info.name}</span>
            </div>
            <div className="RefNo">
              <span>RefNo. {info.RefNo}</span>
            </div>
            <div className="Location">
              <span>Location: {info.Location}</span>
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
              <div className="Value">
                <label htmlFor="">Value (in mm) </label>
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

export default Remote_Convergence_Indicator_form