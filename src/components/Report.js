import React from "react";
import "./Report.css";

import MultiStep from "react-multistep";

// import components
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
];

const prevStyle = { background: "#33c3f0", "border-width": "2px" };
const nextStyle = { background: "#33c3f0", "border-width": "2px" };

function Report() {
  //write javascript here

  return (
    <div className="Report">
      <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    </div>
  );
}

export default Report;
