import React from 'react'
import Remote_Convergence_Indicator_form from './Instrument_forms/Remote_Convergence_Indicator_form/Remote_Convergence_Indicator_form';
import Rotary_Tell_Tale_form from './Instrument_forms/Rotary_Tell_Tale_form/Rotary_Tell_Tale_form';
import Auto_Warning_Tell_Tale_form from './Instrument_forms/Auto_Warning_Tell_Tale/Auto_Warning_Tell_Tale_form';
import Dual_Height_Tell_Tale_form from './Instrument_forms/Dual_Height_Tell_Tale/Dual_Height_Tell_Tale_form';
function Instrument_Component({ name, RefNo, Location, closeForm}) {
    const componentNames = {
        "Remote Convergence Indicator": Remote_Convergence_Indicator_form,
        "Rotary Tell Tale": Rotary_Tell_Tale_form,
        "Auto Warning Tell Tale": Auto_Warning_Tell_Tale_form,
        "Dual Height Tell Tale": Dual_Height_Tell_Tale_form
    };
    var category = name;
    var SomeComponent = componentNames[category];
    return (
        <SomeComponent name={name} RefNo={RefNo} Location={Location} closeForm={closeForm}/>
    )
}

export default Instrument_Component