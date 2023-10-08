import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';

import '../Show_Entry_Components/Show_Entry.css'
import Dynamic_Graph from './Dynamic_Graph';
function Show_Entry({ info, onClose }) {
    const value_list = [
        {
            date: "17/01/2023",
            value: 15.01
        },
        {
            date: "18/01/2023",
            value: 15.03
        },
        {
            date: "19/01/2023",
            value: 15.05
        },
        {
            date: "20/01/2023",
            value: 15.07
        },
        {
            date: "21/01/2023",
            value: 15.09
        },
        {
            date: "22/01/2023",
            value: 15.11
        },
        {
            date: "23/01/2023",
            value: 15.13
        },
        {
            date: "24/01/2023",
            value: 15.15
        },
        {
            date: "25/01/2023",
            value: 15.17
        },
        {
            date: "26/01/2023",
            value: 15.19
        }
    ]

    const [data, setData] = useState(value_list);
    const [editIndex, setEditIndex] = useState(-1);
    const [newValue, setNewValue] = useState('');

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
                <Dynamic_Graph data={data}/>
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