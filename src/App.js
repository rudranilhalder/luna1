import React, { useState } from "react";
import Gallary from './Gallary'
import Gallary1 from './Gallary1'
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
  
    <div id="back">
       <title>Home - My React App</title>
    <div className="container">
    
       <Gallary1 />
      <div className="right-half">
        <div className="tabs">
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={activeTab === "experiences" ? "active" : ""}
            onClick={() => setActiveTab("experiences")}
          >
            Experiences
          </button>
          <button
            className={activeTab === "recommended" ? "active" : ""}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
        </div>
        <div className="content">
          {activeTab === "about" && <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </p>}
          {activeTab === "experiences" && <p>Experiences content...</p>}
          {activeTab === "recommended" && <p>Recommended content...</p>}
        </div>
        
        <Gallary />
      </div>
    </div>
    </div>
  );
}


export default App;