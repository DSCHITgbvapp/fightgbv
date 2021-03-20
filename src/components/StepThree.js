import React from "react";
import "./Steps.css";

function StepThree() {
  return (
    <div className="StepThree steps_container">
      <h1>StepThree </h1>
      <label>
        <h3>What happened</h3>
        <select name="what_happened">
          <option value="raped">Raped</option>
          <option value="rape attempt">Rape Attempt</option>
          <option value="physical abuse">Physical Abuse</option>
          <option value="sexual abuse">Sexual Abuse</option>
          <option value="emotional abuse">Emotional Abuse</option>
          <option value="economic abuse">Economic Abuse</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        <h3>Who is the perpetrator</h3>
        <input
          type="text"
          name="perpetrator"
          placeholder="Who is the perpetrator"
        />
      </label>
      <label>
        <h3>Describe What happened</h3>
        <input
          type="text"
          name="description"
          placeholder="Provide a brief description"
        />
      </label>
      <label>
        <h3>Where did this incident occur</h3>
        <input type="text" name="location" placeholder="Location" />
      </label>
      <label>
        <h3>Phone Number</h3>
        <input
          type="text"
          name="perpetrator"
          placeholder="Enter valid phone number"
        />
      </label>
    </div>
  );
}

export default StepThree;
