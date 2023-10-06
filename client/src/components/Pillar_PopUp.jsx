import React from "react";
import "./css/popup.css";
function Pillar_PopUp({ pillar, closePopup }) {
    return (
        <>
            <div className="PopUp_Background">
                <div className="PopUp_container">
                    <div className="closeButton">
                        <button onClick={() => closePopup(null)}>X</button>
                    </div>
                    <div className="Pillar_Name">
                        <h3>Name: {pillar.name}</h3>
                    </div>
                    <div className="Pillar_State">
                        <h4>State: {pillar.state}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pillar_PopUp;
