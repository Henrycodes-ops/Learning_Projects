import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./assets/component/header";
import Entry from "./assets/component/entry";


function App() {
  return (
    <div className="container">
      <Header />
      <Entry />
    </div>
  );
}

export default App;
