import React from 'react'

function Roof_Fall_Info({info}) {
  return (
    <>
      <div className="roof_fall_info_container">
        <h3>Cumulative Extraction: {info.Cumulative_extraction}</h3>
        <h3>Daily Extraction: {info.Daily_Extraction}</h3>
        <h3>Local Fall: {info.Local_Fall}</h3>
        <h3>Hanging Roof: {info.Hanging_Roof}</h3>
      </div>
    </>
  )
}

export default Roof_Fall_Info