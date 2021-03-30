import React, { useState } from "react";
import "./ReportForm.css";
import db from "../firebase";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_jgREY3FWsbX6J8mMcOpgx");

// import components

function ReportForm() {
  const [person, setPerson] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [typeOfAbuse, setTypeOfAbuse] = useState("");
  const [relationship, setRelationship] = useState("");
  const [lastTime, setLastTime] = useState("");
  const [howOften, setHowOften] = useState("");
  const [location, setLocation] = useState("");
  const [disability, setDisability] = useState("");
  const [shareDetail, setShareDetail] = useState("");
  const [contact, setContact] = useState("");

  const [loader, setLoader] = useState(false);

  function handleData(e) {
    e.preventDefault();

    if (
      person === "" ||
      gender === "" ||
      age === "" ||
      typeOfAbuse === "" ||
      relationship === "" ||
      lastTime === "" ||
      howOften === "" ||
      location === "" ||
      disability === ""
    ) {
      alert("Make sure you fillout all fields marked by (*)");
    } else {
      setLoader(true);

      var templateParams = {
        person: person,
        gender: gender,
        age: age,
        typeOfAbuse: typeOfAbuse,
        relationship: relationship,
        lastTime: lastTime,
        howOften: howOften,
        location: location,
        disability: disability,
        shareDetail: shareDetail,
        contact: contact,
      };

      db.collection("reports")
        .add({
          person: person,
          gender: gender,
          age: age,
          typeOfAbuse: typeOfAbuse,
          relationship: relationship,
          lastTime: lastTime,
          howOften: howOften,
          location: location,
          disability: disability,
          shareDetail: shareDetail,
          contact: contact,
        })
        .then(() => {
          alert(
            "Your report has been submitted. We are sorry this happened to you or your acquaintance. We encourage you to also report to the nearest police station or clinic for help"
          );
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      //  Emailjs
      emailjs
        .send(
          "service_tlasi3n",
          "template_g34dc4k",
          templateParams,
          "user_jgREY3FWsbX6J8mMcOpgx"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setPerson("");
      setGender("");
      setAge("");
      setTypeOfAbuse("");
      setRelationship("");
      setLastTime("");
      setHowOften("");
      setLocation("");
      setDisability("");
      setShareDetail("");
      setContact("");
    }
  }

  return (
    <div className="ReportForm">
      <h1>Please Fill in the following questions</h1>
      <h3>
        <em>
          No contact details or GPS location will be recorded using this app.
          The information you share with confidant will only be used for
          statistics purporses, and can be used by the Ministry for policy
          planning. We encourge you to report to the police for legal action to
          be taken.
        </em>
      </h3>
      <form>
        <ol>
          <li>
            <h3>
              Whom are you reporting for? <span className="asterik">*</span>
            </h3>
          </li>
          <select
            value={person}
            onChange={(e) => {
              setPerson(e.target.value);
            }}
            name="person"
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Myself">Myself</option>
            <option value="Someone else">Someone else</option>
          </select>
          <li>
            <h3>
              What is their gender / your gender (if you're the victim)?{" "}
              <span className="asterik">*</span>{" "}
            </h3>
          </li>
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <li>
            <h3>
              What is the victim's age? <span className="asterik">*</span>
            </h3>
          </li>
          <select
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Below 15 years">Below 15 years</option>
            <option value="16 - 25 years">16 - 25 years</option>
            <option value="26 - 35 years">26 - 35 years</option>
            <option value="36 - 45 years">36 - 45 years</option>
            <option value="46 - 55 years">46 - 55 years</option>
            <option value="46 - 55 years">46 - 55 years</option>
            <option value="Over 55 years">Over 55 years</option>
          </select>

          <li>
            <h3>
              What kind of abuse was it ? <span className="asterik">*</span>
            </h3>
          </li>
          <select
            value={typeOfAbuse}
            onChange={(e) => {
              setTypeOfAbuse(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Physical Assult">Physical Assult</option>
            <option value="Sexual harrassment">Sexual harrassment</option>
            <option value="Restricted Movement">Restricted Movement</option>
            <option value="Denial of basic needs">
              Denial of basic needs (e.g food, water etc)
            </option>
          </select>

          <li>
            <h3>
              What is the relationship with the pepetrator{" "}
              <span className="asterik">*</span>
            </h3>
          </li>

          <select
            value={relationship}
            onChange={(e) => {
              setRelationship(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Current partner">Current partner</option>
            <option value="Past partner">Past partner</option>
            <option value="Friend">Friend</option>
            <option value="Family Member">Family Member</option>
            <option value="Colleague">Colleague</option>
            <option value="Superior/ Someone in authority">
              Someone superior or in authority
            </option>
            <option value="Stranger">Stranger</option>
          </select>

          <li>
            <h3>
              When was the last time this happened{" "}
              <span className="asterik">*</span>
            </h3>
          </li>

          <select
            value={lastTime}
            onChange={(e) => {
              setLastTime(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Within the last 7 days">
              Within the last 7 days
            </option>
            <option value="Within the past 30 days">
              Within the past 30 days
            </option>
            <option value="More than a month ago">More than a month ago</option>
            <option value="Within the past 12 months">
              {" "}
              Within the past 12 months{" "}
            </option>
            <option value="More than a year ago"> More than a year ago </option>
          </select>

          <li>
            <h3>
              How often does this happen <span className="asterik">*</span>
            </h3>
          </li>
          <select
            value={howOften}
            onChange={(e) => {
              setHowOften(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Once"> Once</option>
            <option value="More than once"> More than once</option>
          </select>

          <li>
            <h3>
              Where did this happen <span className="asterik">*</span>
            </h3>
          </li>
          <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />

          <li>
            <h3>
              Do you (or the victim) have any disability{" "}
              <span className="asterik">*</span>
            </h3>
          </li>
          <select
            value={disability}
            onChange={(e) => {
              setDisability(e.target.value);
            }}
          >
            <option value="" selected disabled>
              {" "}
            </option>
            <option value="Yes"> Yes</option>
            <option value="No"> No</option>
          </select>
          <li>
            <h3>Do you want to share any other details? </h3>
          </li>
          <textarea
            name="shareDetail"
            placeholder="Type here..."
            value={shareDetail}
            onChange={(e) => {
              setShareDetail(e.target.value);
            }}
          />
          <li>
            <h3>
              Do you want us to share your details with organisations that might
              help? If so input your contact details below so that they can
              contact you
            </h3>
          </li>
          <input
            name="contact"
            type="text"
            placeholder="email or phone"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </ol>
        <button
          type="submit"
          onClick={handleData}
          style={{ background: loader ? "#eaeaea" : "var(--mainPinkColor)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReportForm;
