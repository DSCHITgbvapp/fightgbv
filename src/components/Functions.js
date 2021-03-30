import React from "react";
import { Link } from "react-router-dom";

import "./Functions.css";

import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import { HelpOutline } from "@material-ui/icons";
import RoomIcon from "@material-ui/icons/Room";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InsertChartIcon from "@material-ui/icons/InsertChart";

function Functions() {
  return (
    <div className="Functions">
      <div className="container">
        <Link to="/report">
          <div className="box">
            <div className="icon">
              <CallIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Report A Case</h6>
              <p className="box-intro">
                Report your case to us and we will call you with assistance
                within 24hrs.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/help">
          <div className="box">
            <div className="icon">
              <RoomIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Find Help</h6>
              <p className="box-intro">
                Find places near you where you can find help
              </p>
            </div>
          </div>
        </Link>

        <Link to="/share-story">
          <div className="box">
            <div className="icon">
              <MenuBookIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Survivors Story</h6>
              <p className="box-intro">
                Read/Share encouraging stories of other victims or share a story
              </p>
            </div>
          </div>
        </Link>

        <Link to="/learn-more">
          <div className="box">
            <div className="icon">
              <LocalLibraryIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Learn More</h6>
              <p className="box-intro">
                Learn more about gbv, rape with our resources
              </p>
            </div>
          </div>
        </Link>

        <Link to="/statistics">
          <div className="box">
            <div className="icon">
              <InsertChartIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Statistics</h6>
              <p className="box-intro">
                Read more about GBV statistics in Zimbabwe
              </p>
            </div>
          </div>
        </Link>

        <Link to="/risk">
          <div className="box">
            <div className="icon">
              <HelpOutline />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Am I At Risk</h6>
              <p className="box-intro">
                Go through an assessment that will determine whether you're at
                risk or not
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Functions;
