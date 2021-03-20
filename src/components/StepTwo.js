import React from "react";
import "./Steps.css";

// import compTwonts

function StepTwo() {
  //write javascript here

  return (
    <div className="StepTwo steps_container">
      <h1>What is your Gender </h1>
      <label>
        <input type="radio" value="male" name="gender" />
        <h3>Male</h3>
      </label>
      <label>
        <input type="radio" value="female" name="gender" />
        <h3>Female</h3>
      </label>
      <label>
        <input type="radio" value="other" name="gender" />
        <h3>Other</h3>
      </label>
    </div>
  );
}

export default StepTwo;
