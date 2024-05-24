import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import TalentPage from "./components/TalentPage/TalentPage";
function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <TalentPage />
    </div>
  );
}

export default App;
