import React from "react";
import "./Statistics.css";

import Stats from "./Stats";

function Statistics() {
  return (
    <div className="Statistics">
      <div className="stats stats1">
        <p>
          The national GBV Hotline (Musasa) has recorded a total of{" "}
          <span className="stat">6,832 </span>GBV calls from the beginning of
          the lockdown on 30 March until the end of December
        </p>
        <table class="content-table">
          <tbody>
            <tr>
              <td>April 2020</td>
              <td>1,312</td>
            </tr>
            <tr>
              <td>May 2020</td>
              <td>915</td>
            </tr>
            <tr>
              <td>June 2020</td>
              <td>779</td>
            </tr>
            <tr>
              <td>July 2020</td>
              <td>753</td>
            </tr>

            <tr>
              <td>August 2020</td>
              <td>766</td>
            </tr>
            <tr>
              <td>September 2020</td>
              <td>546</td>
            </tr>
            <tr>
              <td>October 2020</td>
              <td>546</td>
            </tr>
            <tr>
              <td>November 2020</td>
              <td>567</td>
            </tr>
            <tr>
              <td>December 2020</td>
              <td>565</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="stats stats2">
        <p>
          Psychological violence remains the most frequent form of violence and
          about 90% of all cases are intimate partner violence
        </p>
        <table class="content-table">
          <tbody>
            <tr>
              <td>Psychological Violence</td>
              <td>55%</td>
            </tr>
            <tr>
              <td>Physical violence</td>
              <td>22%</td>
            </tr>
            <tr>
              <td>Economic violence</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Sexual violence</td>
              <td>8%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="stats stats3">
        <Stats />
      </div>
    </div>
  );
}

export default Statistics;
