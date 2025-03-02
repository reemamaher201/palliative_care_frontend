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
import Chat from "./components/Patients/chat.jsx";
import Notifications from "./components/Patients/Notifications.jsx";
//import Dashboard from "./components/Ministry/Dashboard.jsx";
import Dashboard from "./components/Providers/Dashboard.jsx";
import AddProvider from "./components/Ministry/AddProvider.jsx";
import ShowProvider from "./components/Ministry/ShowProvider.jsx";
import ShowPatients from "./components/Ministry/ShowPatinets.jsx";
import CreateNotification from "./components/Ministry/CreateNotification.jsx";
import ShowNotifications from "./components/Ministry/ShowNotifications.jsx";
import ShowMedicines from "./components/Ministry/ShowMedicines.jsx";
import ChatPage from "./components/Ministry/Chat.jsx";
import AddMedicine from "./components/Ministry/AddMedicine.jsx";
import Statistics from "./components/Ministry/Statistics.jsx";
import ChatPage4 from "./components/Providers/Chat.jsx";
import CaseManagement from "./components/Providers/CaseManagement.jsx";
import AccountSettings from "./components/Providers/AccountSettings.jsx";
import DrugInventory from "./components/Providers/DrugInventory.jsx";
function App() {
    return (
      <DrugInventory />
    );
}

export default App;