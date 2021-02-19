import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import Hero from "./components/Hero";
import Functions from "./components/Functions";
import Header from "./components/Header";
import Report from "./components/Report";
import Chat from "./components/Chat";
import SupportGroup from "./components/SupportGroup";
import Risk from "./components/Risk";
import FindHelp from "./components/FindHelp";
import LearnMore from "./components/LearnMore";
import ShareStory from "./components/ShareStory";

function App() {
  //write javascript here

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/support-group">
            <SupportGroup />
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
            <LearnMore />
          </Route>
          <Route path="/">
            <Hero />
            <Functions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
