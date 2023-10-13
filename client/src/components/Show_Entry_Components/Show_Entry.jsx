import React, { useEffect, useState } from 'react'
import '../Show_Entry_Components/Show_Entry.css'
import Dynamic_Graph from './Dynamic_Graph';
function Show_Entry({ info, onClose }) {
    const value_list = [
        {
          date: "17/01/2023",
          value: 0.00
        },
        {
          date: "18/01/2023",
          value: 0.00
        },
        {
          date: "19/01/2023",
          value: 0.01
        },
        {
          date: "20/01/2023",
          value: 0.02
        },
        {
          date: "21/01/2023",
          value: 0.06
        },
        {
          date: "22/01/2023",
          value: 1.00
        },
        {
          date: "23/01/2023",
          value: 1.50
        },
        {
          date: "24/01/2023",
          value: 1.60
        },
        {
          date: "25/01/2023",
          value: 2.45
        },
        {
          date: "26/01/2023",
          value: 3.56
        },
        // Additional entries
        {
          date: "27/01/2023",
          value: 4.25
        },
        {
          date: "28/01/2023",
          value: 5.12
        },
        {
          date: "29/01/2023",
          value: 6.78
        },
        {
          date: "30/01/2023",
          value: 7.90
        },
        {
          date: "31/01/2023",
          value: 8.42
        },
        {
          date: "01/02/2023",
          value: 9.25
        },
        {
          date: "02/02/2023",
          value: 10.01
        },
        {
          date: "03/02/2023",
          value: 11.20
        },
        {
          date: "04/02/2023",
          value: 12.36
        },
        {
          date: "05/02/2023",
          value: 13.48
        }
      ];
      

    const [data, setData] = useState(value_list);
    const [editIndex, setEditIndex] = useState(-1);
    const [newValue, setNewValue] = useState('');
    const [RateOfConvergence, setRateOfconvergence] = useState(0);
    const handleUpdate = (index) => {
        // Set the index of the data-block to be edited
        setEditIndex(index);
        // Set the initial value to the current value in value_list
        setNewValue(data[index].value.toString());
    };

    const handleSubmit = () => {
        if (editIndex !== -1) {
            // Update the value in value_list with the new value
            const updatedData = [...data];
            updatedData[editIndex].value = parseFloat(newValue);
            setData(updatedData);
            // Reset editIndex and newValue
            setEditIndex(-1);
            setNewValue('');
        }
    };
    const UpdateRateOfConvergence = () => {
        let tempROC = RateOfConvergence;
        let tempSUM = 0;
        for (let index = 1; index < data.length; index++) {
            var x = data[index].value;
            var y = data[index-1].value;
            tempSUM += (x-y);
        }
        tempROC = tempSUM/(data.length);
        setRateOfconvergence(tempROC)
    }
    useEffect(()=>{
        UpdateRateOfConvergence();
    });
    return (
        <div className="Show_Entry_Background">
            <div className="Show_Entry_Content">
                <button className="Close_Button" onClick={()=>onClose(false)}>X</button>
                <h2>Instrument Information</h2>
                <div className="Instrument_info">
                    <p>Name: {info.name}</p>
                    <p>RefNo: {info.RefNo}</p>
                    <p>Location: {info.Location}</p>
                </div>
                <Dynamic_Graph RefNo={info.RefNo} data={data}/>
                <div className="RateOfConvergence">
                    <h3>Rate Of Convergence is: {RateOfConvergence}</h3>
                </div>

                <div className="Data-Container">
                    <h2>Data List</h2>
                    <div className="Data-List">
                        {data.map((entry, index) => (
                            <div key={index} className="data-block">
                                <div className="data-item">
                                    <span>Date: {entry.date}</span>
                                    {editIndex === index ? (                                        <>
                                            <label htmlFor="">Update: </label>
                                            <input
                                                type="number"
                                                onChange={(e) => setNewValue(e.target.value)}
                                            />
                                            <button onClick={handleSubmit}>Submit</button>
                                        </>
                                    ) : (
                                        <>
                                            <span>Value: {entry.value}</span>
                                            <button onClick={() => handleUpdate(index)}>Update</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show_Entry;