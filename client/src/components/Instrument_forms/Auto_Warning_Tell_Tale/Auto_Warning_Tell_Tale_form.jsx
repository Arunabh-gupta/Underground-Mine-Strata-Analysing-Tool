import React from 'react'
import '../Auto_Warning_Tell_Tale/Auto_Warning_Tell_Tale.css'
function Auto_Warning_Tell_Tale_form({ name, RefNo, Location, closeForm }) {

  return (
    <>
      <div className="Form_Background">
        <form action="" method="post">
          <div className="Form_Container">
            <div className="closeButton">
              <button onClick={() => closeForm(null)}>X</button>
            </div>
            <div className="Name">
              <span>{name}</span>
            </div>
            <div className="RefNo">
              <span>RefNo. {RefNo}</span>
            </div>
            <div className="Location">
              <span>Location: {Location}</span>
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

export default Auto_Warning_Tell_Tale_form