import React from 'react';
import "../styles/styles.css"

const projects = [
    {
      id: 1,
      name: "Scriptomatics",
      link: "https://github.com/ScriptoNaughts/Scriptomatics",
      description: "A place where screenplay writers and agents can post, share and purchase screen plays.",
      pictureLink: "../Images/Scriptomatics_HomePage.png",
    },
    {
      id: 2,
      name: "Travelling Event Planner",
      link: "https://github.com/Project1Group6/ticketmaster-event-planner",
      description: "A place where you can search any city and find events taking place there to be able to plan your vacation perfectly.",
      pictureLink: "../Images/ticketmaster-event-planner_.png",
    },
    {
      id: 3,
      name: "E-Commerce Back-End",
      link: "https://github.com/GSynnott/E-Commerce_Back_End",
      description: "A functioning back end to an e-commerce web site using MySQL.",
      pictureLink: "../Images/E-Commerce-Back-End.png",
    },
    {
      id: 4,
      name: "Work Day Scheduler",
      link: "https://github.com/GSynnott/Work_Day_Schedule",
      description: "An app that lets you schedule your workday down to the hour.",
      pictureLink: "../Images/Work-Day-Scheduler.png",
    },
    {
      id: 5,
      name: "Password Generator",
      link: "https://github.com/GSynnott/Challenge_3_Password_Generator",
      description: "An app developed to generate a password based on specifed criteria.",
      pictureLink: "../Images/Password-Generator.png",
    },
    {
      id: 6,
      name: "Javascript Quiz",
      link: "https://github.com/GSynnott/JS_Quiz",
      description: "An app developed to quiz the user on their knowledge of javascript.",
      pictureLink: "../Images/JS-Quiz.png",
    }
];
// <header style={styles.headerStyle} className="header">
function Portfolio(){
    return(
      <div >
        {projects.map(item => (
          <a href={item.link}>
            <div key={item.id} className="portfolio portfolio-list portfolio-title">
              <img src={item.pictureLink} alt={item.description}></img>
              <h3>{item.name}</h3>
              <div>{item.description}</div>
            </div>
          </a>
        ))}
      </div>
    );
}

export default Portfolio;