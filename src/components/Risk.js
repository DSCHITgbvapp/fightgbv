import React from "react";
import "./Report.css";

import MultiStep from "react-multistep";

// import components
import AmIAtRiskOne from "./AmIAtRiskOne";
import AmIAtRiskTwo from "./AmIAtRiskTwo";
import AmIAtRiskThree from "./AmIAtRiskThree";
import AmIAtRiskFour from "./AmIAtRiskFour";
import AmIAtRiskFive from "./AmIAtRiskFive";

const steps = [
  { component: <AmIAtRiskOne /> },
  { component: <AmIAtRiskTwo /> },
  { component: <AmIAtRiskThree /> },
  { component: <AmIAtRiskFour /> },
  { component: <AmIAtRiskFive /> },
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
