// import { Routerprovider, createBrower } from "react-dom";
import React from "react";
import "./App.css";
import Header from "./Header/header";
import FormPage from "./Forms/forms.jsx";
import FeaturesLayout from "./Features/features";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header />
      <FeaturesLayout />
    </div>
  );
}

export default App;
