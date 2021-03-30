import React from "react";
import "./Stats.css";

import { IoWomanSharp } from "react-icons/io5";

// import components

function Stats() {
  //write javascript here

  return (
    <div className="Stats">
      <h1>a double pandemic</h1>
      <h2>
        <em>
          During the lockdown, Zimbabwe saw the largest increase of instances of
          violence
        </em>
      </h2>

      <h3>In Zimbabwe</h3>
      <div className="statistics">
        <div>
          <IoWomanSharp className="woman first" />
          <IoWomanSharp className="woman" />
          <IoWomanSharp className="woman" />
          <p>
            1 in 3 women have experienced physical violence since the age of 15
          </p>
        </div>
        <div>
          <IoWomanSharp className="woman first" />
          <IoWomanSharp className="woman" />
          <IoWomanSharp className="woman" />
          <IoWomanSharp className="woman" />
          <p>
            1 in 4 women have experienced sexual violence since the age of 15
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
