import React from 'react'

function StressCell() {
  return (
    <>
      <form action="/StressCell" method="post">

        <div>
          <label for="stress cell">STRESS CELL:</label>
          <br/>
          <label htmlFor="">ROW NO.</label>
          <input type="text" name="" id="" />  
          <label htmlFor="">COLUMN NO.</label>    
          <input type="number" name="" id="" />
        </div>

        <div>
          <label for="date">DATE:</label>
          <input type="date" name="date" id="date"></input>
        </div>

        <div>
          <label for="time">TIME:</label>
          <input type="time" name="time" id="time"></input>
        </div>
        <div>
          <label for="condition">CONDITION:</label>
          WORKING <input type="radio" name="condition" id="condition" value="WORKING"></input>
          NOT-WORKING <input type="radio" name="condition" id="condition" value="NOT-WORKING"></input>
        </div>

          <div id="working1">
            <div>IF WORKING</div>
            <label for="value">STRESS VALUE:</label>
            <input type="number" name="value" id="value" value="0"></input>
          </div>

          <div id="working2">

            <label for="reason">REASON:</label>
              LOST INTO GOAF <input type="radio" name="reason" id="reason" value="LOST INTO GOAF"></input>
              MALFUNCTIONAL <input type="radio" name="reason" id="reason" value="MALFUNCTIONAL"></input>
          </div>

          <div>
            <input type="submit" value="SUBMIT NOW" class="select"></input>
          </div>
          <div>
            <input type="reset" value="RESET NOW" class="select"></input>
          </div>
      </form>
    </>
  )
}

export default StressCell