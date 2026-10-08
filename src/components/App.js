import React, {Component, useState} from "react";
import '../styles/App.css';
import Helper from "./Helper.js";
const App = () => {
   const projects = [
    { name: "AI Chatbot", description: "A chatbot that answers questions using AI." },
    { name: "Portfolio Website", description: "A personal site to showcase my projects." },
    { name: "E-commerce App", description: "An online store with cart and checkout features." }
  ];
  return (
    <div className="ns-wrapper">
      {
        projects.map((project)=>(
          <Helper name={project.name} description={project.description}/>

        ))
      }
    </div>
  )
}


export default App;
