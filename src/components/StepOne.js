import React from "react";
import "./Steps.css";

// import components

function StepOne() {
  //write javascript here

  return (
    <div className="StepOne steps_container">
      <h1>You Are Reporting For ?</h1>
      <label>
        <input type="radio" value="Me" name="report_for" />
        <h3>Myself</h3>
      </label>
      <label>
        <input type="radio" value="Someone else" name="report_for" />
        <h3>Someone else</h3>
      </label>

      <label>
        <h3>How are you related to them</h3>
        <input type="text" disabled />
      </label>
    </div>
  );
}

export default StepOne;
