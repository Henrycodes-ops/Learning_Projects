import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./assets/component/header";
import Entry from "./assets/component/entry";
import jokesData from './data.js'
import Joke from "./joke.jsx";


function App() {
  const jokeElement = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />

  })
  return (
    <div className="container">
      <Header />
      <Entry />
      {jokeElement}
    </div>
  );
}

export default App;
