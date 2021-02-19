import React from "react";
import { Link } from "react-router-dom";

import "./Functions.css";
import Call from "./../asserts/call.svg";
import Text from "./../asserts/text.svg";
import Question from "./../asserts/question.svg";
import Learn from "./../asserts/learn.svg";
import Map from "./../asserts/map.svg";
import GroupChat from "./../asserts/groupchat.svg";
import ShareStory from "./../asserts/share.svg";

// import components

function Functions() {
  //write javascript here

  return (
    <div className="Functions">
      <div className="container">
        <div className="box">
          <img className="thumbnail" src={Call} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Report A Case</h6>
            <p className="box-intro">
              Report your case to us and we will call you with assistance within
              24hrs.
            </p>
            <Link to="/report">
              <a className="box-button" target="_blank">
                Report
              </a>
            </Link>
          </div>
        </div>

        <div className="box">
          <img className="thumbnail" src={Text} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Chat With A Proffessional</h6>
            <p className="box-intro">
              Send a message and get replied by professionalls who are ready to
              help
            </p>
            <Link to="/chat">
              <a className="box-button" target="_blank">
                Start Now
              </a>
            </Link>
          </div>
        </div>

        <div className="box">
          <img className="thumbnail" src={GroupChat} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Support Group</h6>
            <p className="box-intro">Interact with other victims anonymously</p>
            <Link to="/support-group">
              <a className="box-button" target="_blank">
                Join Now
              </a>
            </Link>
          </div>
        </div>

        <div className="box">
          <img className="thumbnail" src={Question} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Am I At Risk</h6>
            <p className="box-intro">
              Go through an assessment that will determine whether you're at
              risk or not
            </p>
            <Link to="/risk">
              <a className="box-button">Assess</a>
            </Link>
          </div>
        </div>

        <div className="box">
          <img className="thumbnail" src={Map} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Find Help</h6>
            <p className="box-intro">
              Find places near you where you can find help
            </p>
            <Link to="/help">
              <a className="box-button" target="_blank" href="#">
                Get Help Now
              </a>
            </Link>
          </div>
        </div>

        <div className="box">
          <img className="thumbnail" src={Learn} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Learn More</h6>
            <p className="box-intro">
              Learn more about gbv, rape with our resources
            </p>
            <Link to="/learn-more">
              <a className="box-button" target="_blank" href="#">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="box">
          <img className="thumbnail" src={ShareStory} alt="post thubnail" />
          <div className="box-preview">
            <h6 className="box-title">Read Or Share Story</h6>
            <p className="box-intro">
              Read encouraging stories of other victims or share a story
            </p>
            <Link to="/share-story">
              <a className="box-button" target="_blank" href="#">
                Share Or Read Story
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;
