import React from "react";

//import LandingPage   from "./components/Landing/LandingPage.jsx";
import './App.css'
import LoginPage from "./components/Auth/LoginPage.jsx";
import LandingPage from "./components/Landing/LandingPage.jsx";
import SignupPage from "./components/Auth/SignupPage.jsx";
import GeneralAdvice from "./components/Patients/GeneralAdvice.jsx";
import Settings     from "./components/Patients/Settings.jsx";
import PProfile from "./components/Patients/PProfile.jsx";
import Support from "./components/Patients/Support.jsx"
import Chat from "./components/chat.jsx";
import Notifications from "./components/Patients/Notifications.jsx";
import Dashboard from "./components/Ministry/Dashboard.jsx";
function App() {
    return (
      <Dashboard />
    );
}

export default App;