import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./assets/component/header";
import Entry from "./assets/component/entry";
import jokesData from './data'


function App() {
  const jokeElement = jokesData.map((joke) => {
    return <joke />

  })
  return (
    <div className="container">
      <Header />
      <Entry />
      
    </div>
  );
}

export default App;
