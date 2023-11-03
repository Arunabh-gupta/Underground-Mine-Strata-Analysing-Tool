import React from 'react'
import '../Add_Daily_Extraction/Add_Daily_Extraction_Data.css'
function Add_Daily_extraction({ closeForm }) {
    return (
        <>
            <div className="Form_Background">
                <form action='/DailyExtraction/' method='post' >
                    
                    <div className="Form_Container">
                        <div className='closeButton'>
                            <button onClick={() => closeForm(null)}>X</button>                            
                       </div>
                        <div className="formBody">
                            <div className="Date">
                                <label htmlFor="">Date: </label>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="Area">
                                <label htmlFor="">Area Extracted: </label>
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

export default Add_Daily_extraction