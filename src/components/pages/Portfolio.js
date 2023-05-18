import React from 'react';
import "../styles/styles.css"
import scriptomatics_HomePage from '../Images/Scriptomatics_HomePage.png';
import tmPlanner from '../Images/ticketmaster-event-planner_.png';
import eCommerce from '../Images/E-Commerce-Back-End.png';
import workDay from '../Images/Work-Day-Scheduler.png';
import pwGen from '../Images/Password-Generator.png';
import jsQuiz from '../Images/JS-Quiz.png';

const projects = [
    {
      id: 1,
      name: "Scriptomatics",
      link: "https://github.com/ScriptoNaughts/Scriptomatics",
      description: "A place where screenplay writers and agents can post, share and purchase screen plays.",
      pictureLink: scriptomatics_HomePage,
    },
    {
      id: 2,
      name: "Travelling Event Planner",
      link: "https://github.com/Project1Group6/ticketmaster-event-planner",
      description: "A place where you can search any city and find events taking place there to be able to plan your vacation perfectly.",
      pictureLink: tmPlanner,
    },
    {
      id: 3,
      name: "E-Commerce Back-End",
      link: "https://github.com/GSynnott/E-Commerce_Back_End",
      description: "A functioning back end to an e-commerce web site using MySQL.",
      pictureLink: eCommerce,
    },
    {
      id: 4,
      name: "Work Day Scheduler",
      link: "https://github.com/GSynnott/Work_Day_Schedule",
      description: "An app that lets you schedule your workday down to the hour.",
      pictureLink: workDay,
    },
    {
      id: 5,
      name: "Password Generator",
      link: "https://github.com/GSynnott/Challenge_3_Password_Generator",
      description: "An app developed to generate a password based on specifed criteria.",
      pictureLink: pwGen,
    },
    {
      id: 6,
      name: "Javascript Quiz",
      link: "https://github.com/GSynnott/JS_Quiz",
      description: "An app developed to quiz the user on their knowledge of javascript.",
      pictureLink: jsQuiz,
    }
];

function Portfolio(){
    return(
      <div>
        {projects.map(item => (
          <a href={item.link}>
            
            <div key={item.id} className="portfolio portfolio-list portfolio-title">
              <div>
                <h3>{item.name}</h3>
                <div>{item.description}</div>
                <img src={item.pictureLink} alt={item.description}></img>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
}

export default Portfolio;