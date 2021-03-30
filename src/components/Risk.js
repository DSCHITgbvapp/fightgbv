import React, { useState } from "react";
import "./Risk.css";

// import components

function Risk() {
  const [monitoring, setMonitoring] = useState(false);
  const [passwords, setPasswords] = useState(false);
  const [reply, setReply] = useState(false);
  const [preventingSeeingFam, setPreventingSeeingFam] = useState(false);
  const [preventingWork, setPreventingWork] = useState(false);
  const [jealous, setJealous] = useState(false);
  const [quickTemper, setQuickTemper] = useState(false);
  const [controllingMoney, setControllingMoney] = useState(false);
  const [demeaning, setDemeaning] = useState(false);
  const [humiliatingYou, setHumiliatingYou] = useState(false);
  const [threatening, setThreatening] = useState(false);
  const [hurtingYou, setHurtingYou] = useState(false);
  const [usingWeapon, setUsingWeapon] = useState(false);
  const [forcingSex, setForcingSex] = useState(false);
  const [assumingConsent, setAssummingConsent] = useState(false);

  const [loader, setLoader] = useState(false);

  function assess(e) {
    e.preventDefault();
    setLoader(true);
    var riskPerc = 0;

    monitoring ? (riskPerc += 6) : (riskPerc += 0);
    passwords ? (riskPerc += 6) : (riskPerc += 0);
    reply ? (riskPerc += 7) : (riskPerc += 0);
    preventingSeeingFam ? (riskPerc += 7) : (riskPerc += 0);
    preventingWork ? (riskPerc += 7) : (riskPerc += 0);
    jealous ? (riskPerc += 5) : (riskPerc += 0);
    quickTemper ? (riskPerc += 5) : (riskPerc += 0);
    controllingMoney ? (riskPerc += 7) : (riskPerc += 0);
    demeaning ? (riskPerc += 5) : (riskPerc += 0);
    humiliatingYou ? (riskPerc += 5) : (riskPerc += 0);
    threatening ? (riskPerc += 7) : (riskPerc += 0);
    hurtingYou ? (riskPerc += 6) : (riskPerc += 0);
    usingWeapon ? (riskPerc += 10) : (riskPerc += 0);
    forcingSex ? (riskPerc += 10) : (riskPerc += 0);
    assumingConsent ? (riskPerc += 7) : (riskPerc += 0);

    alert(
      `You are at ${riskPerc}% risk. We encourage you to report any kind of violence to the police`
    );

    setLoader(false);

    setMonitoring(false);
    setPasswords(false);
    setReply(false);
    setPreventingSeeingFam(false);
    setPreventingWork(false);
    setJealous(false);
    setQuickTemper(false);
    setControllingMoney(false);
    setDemeaning(false);
    setHumiliatingYou(false);
    setThreatening(false);
    setHurtingYou(false);
    setUsingWeapon(false);
    setForcingSex(false);
    setAssummingConsent(false);
  }

  return (
    <div className="Risk">
      <h1>Please Fill in the following questions</h1>
      <h3>
        <em>
          In a close relationship, it can be difficult to know whether you are
          being abused, especially if your partner says they love you, gives you
          a lot of attention, or pays for the groceries or rent. People who are
          abusive sometimes act loving and supportive as a way to keep you in
          the relationship. A partner’s loving behavior does not make their
          abusive behavior OK. Forced sex and cruel or threatening words are
          forms of abuse. Answer the following questions and let us help you
          assess whether or not you're at risk. By default all questions are set
          to No, and according to our algorithm submitting the form with all
          responses set to No means you're not at risk
        </em>
      </h3>
      <form>
        <h2>Keeping track of everything you do</h2>
        <ol>
          <li>
            <h3>
              Is everything you're doing being monitored? Where you're and who
              you're with
            </h3>
          </li>
          <select
            value={monitoring}
            onChange={(e) => {
              setMonitoring(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
          <li>
            <h3>
              Does the person demand your passwords to social media sites, email
              accounts or any of your devices?
            </h3>
          </li>
          <select
            value={passwords}
            onChange={(e) => {
              setPasswords(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>
              Does the person demand that you reply right away to texts, emails
              or calls ?
            </h3>
          </li>
          <select
            value={reply}
            onChange={(e) => {
              setReply(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>
              Is the person preventing or discouraging you from seeing friends
              or family ?{" "}
            </h3>
          </li>
          <select
            value={preventingSeeingFam}
            onChange={(e) => {
              setPreventingSeeingFam(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>Preventing or discouraging you from going to work or school</h3>
          </li>

          <select
            value={preventingWork}
            onChange={(e) => {
              setPreventingWork(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <h2>Jealous, controlling or angry</h2>

          <li>
            <h3>
              Is the person acting very jealous, including constantly accusing
              you of cheating
            </h3>
          </li>

          <select
            value={jealous}
            onChange={(e) => {
              setJealous(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>
              Is the person having a quick temper, so you never know what you
              will do or say that may cause a problem
            </h3>
          </li>
          <select
            value={quickTemper}
            onChange={(e) => {
              setQuickTemper(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>Is the person controlling how you spend your money ?</h3>
          </li>
          <select
            value={controllingMoney}
            onChange={(e) => {
              setControllingMoney(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <h2>Demeaning You</h2>
          <li>
            <h3>
              Putting you down, such as insulting your appearance, intelligence,
              or activities
            </h3>
          </li>
          <select
            value={demeaning}
            onChange={(e) => {
              setDemeaning(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
          <li>
            <h3>Is he/she humiliating you in front of others ? </h3>
          </li>
          <select
            value={humiliatingYou}
            onChange={(e) => {
              setHumiliatingYou(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <h2>Physically hurting or threatening to hurt you or loved ones</h2>
          <li>
            <h3>
              Is he / she threatening to hurt you, the children, or other people
            </h3>
          </li>
          <select
            value={threatening}
            onChange={(e) => {
              setThreatening(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
          <li>
            <h3>
              Is he / she hurting you physically (such as hitting, beating,
              pushing, shoving, punching, slapping, kicking, or biting)
            </h3>
          </li>
          <select
            value={hurtingYou}
            onChange={(e) => {
              setHurtingYou(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
          <li>
            <h3>
              Is he / she Using (or threatening to use) a weapon against you
            </h3>
          </li>
          <select
            value={usingWeapon}
            onChange={(e) => {
              setUsingWeapon(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
          <h2>Forcing you to have intimate activities</h2>
          <li>
            <h3>
              Is he / she Forcing you to have sex when you don’t want to through
              physical force or threats
            </h3>
          </li>
          <select
            value={forcingSex}
            onChange={(e) => {
              setForcingSex(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>

          <li>
            <h3>
              Is he/she assuming that consent for a sex act in the past means
              that you must participate in the same acts in the future or
              Assuming that consent for one activity means consent for future
              activity or increased levels of intimacy (for example, assuming
              that kissing should lead to sex every time)
            </h3>
          </li>
          <select
            value={assumingConsent}
            onChange={(e) => {
              setAssummingConsent(e.target.value);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes </option>
          </select>
        </ol>
        <button
          type="submit"
          onClick={assess}
          style={{ background: loader ? "#eaeaea" : "var(--mainPinkColor)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Risk;
