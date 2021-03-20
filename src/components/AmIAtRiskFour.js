import React from "react";
import "./AmIAtRisk.css";

// import compFournts

function AmIAtRiskFour() {
  //write javascript here

  return (
    <div className="AmIAtRiskFour">
      <div className="steps_container">
        <h1>Am I At Risk ?</h1>
        <label>
          <input type="radio" value="shout" name="shout" />
          <h3>Does your partner shout at you all the time</h3>
        </label>
        <label>
          <input type="radio" value="violent" name="violent" />
          <h3>Is your partner violent with you</h3>
        </label>
        <label>
          <input type="radio" value="violent" name="violent" />
          <h3>Has your partner ever threatened you with weapons</h3>
        </label>
      </div>
    </div>
  );
}

export default AmIAtRiskFour;
