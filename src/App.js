import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import SplashScreen from "./components/SplashScreen";
import Functions from "./components/Functions";
import Navbar from "./components/Navbar";
import ReportForm from "./components/ReportForm";
import Statistics from "./components/Statistics";
import Risk from "./components/Risk";
import FindHelp from "./components/FindHelp";
import LearnMore from "./components/LearnMore";
import ShareStory from "./components/ShareStory";
import Stats from "./components/Stats";
import Coercion from "./components/Coercion";
import Stalking from "./components/Stalking";
import SexualAssault from "./components/SexualAssault";

function App() {
  //write javascript here
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/report">
            <ReportForm />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/risk">
            <Risk />
          </Route>
          <Route path="/help">
            <FindHelp />
          </Route>
          <Route path="/learn-more">
            <LearnMore />
          </Route>
          <Route path="/share-story">
            <ShareStory />
          </Route>
          <Route path="/sexual-assault">
            <SexualAssault />
          </Route>
          <Route path="/coercion">
            <Coercion />
          </Route>
          <Route path="/stalking">
            <Stalking />
          </Route>
          <Route path="/">
            <SplashScreen />
            <Stats />
            <Functions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
