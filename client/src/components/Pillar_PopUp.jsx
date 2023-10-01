import React from 'react'
import './css/pillar_popup.css'
function Pillar_PopUp({ pillar, closePopup }) {
    return (
        <>
            <div className="Pillar_PopUp_Background">
                <div className='Pillar_PopUp_container'>
                    <div className='closeButton'></div>
                    <button onClick={() => closePopup(null)}></button>
                    <div className='Pillar_Name'>
                        <h3>Name: {pillar.name}</h3>
                    </div>
                    <div className='Pillar_State'>
                        <h4>State: {pillar.state}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pillar_PopUp