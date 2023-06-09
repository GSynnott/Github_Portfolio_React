import React from 'react';

const projects = [
    {
      id: 1,
      name: "Scriptomatics",
      link: "https://github.com/ScriptoNaughts/Scriptomatics",
      description: "A place where screenplay writers and agents can post, share and purchase screen plays.",
      pictureLink: "",
    },
    {
      id: 2,
      name: "Travelling Event Planner",
      link: "https://github.com/Project1Group6/ticketmaster-event-planner",
      description: "A place where you can search any city and find events taking place there to be able to plan your vacation perfectly.",
      pictureLink: "",
    },
    {
      id: 3,
      name: "E-Commerce Back-End",
      link: "https://github.com/GSynnott/E-Commerce_Back_End",
      description: "A functioning back end to an e-commerce web site using MySQL.",
      pictureLink: "",
    },
    {
      id: 4,
      name: "Work Day Scheduler",
      link: "https://github.com/GSynnott/Work_Day_Schedule",
      description: "An app that lets you schedule your workday down to the hour.",
      pictureLink: "",
    },
    {
      id: 5,
      name: "Wise Guide",
      link: "https://mighty-island-49010.herokuapp.com/userform ",
      description: "Wise Guide is an innovative web application that leverages artificial intelligence to provide personalized tutoring and assistance across a wide range of subjects for learners of all ages. Whether you're a student looking to improve your knowledge on specific subjects, or a lifelong learner aiming to consistently learn about new subjects, Wise Guide is here to assist you.",
      pictureLink: "",
    },
    {
      id: 6,
      name: "5 Day Weather Forecast",
      link: "https://github.com/GSynnott/5_Day_Weather_Forecast",
      description: "An app developed to display the weather forecast for the next 5 days in the city specified.",
      pictureLink: "",
    }
];

function Portfolio(){
    return(
        <div class="projectClass">
            {projects.map(item => (
                <a href={item.link}>
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <div>{item.description}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default  Portfolio;

// export default function Portfolio() {
//   return (
//     <div>
//         <h1>Portfolio Page</h1>
        
//     </div>
//   );
// }



        // <div class="projectClass">
        //     {props.projects.map(item => (
        //         <a href={item.link}>
        //             <div key={item.id}>
        //                 <h3>{item.name}</h3>
        //                 <div>{item.description}</div>
        //             </div>
        //         </a>
        //     ))}
        // </div>