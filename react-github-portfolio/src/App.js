import './App.css';
import FooterDiv from './components/FooterDiv';
import HeaderDiv from "./components/HeaderDiv";
import ProjectDiv from './components/ProjectDiv';

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
    name: "Password Generator",
    link: "https://github.com/GSynnott/Challenge_3_Password_Generator",
    description: "An app developed to generate a password based on specifed criteria.",
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

function App() {
  return (
    <div>
      <HeaderDiv />
      <ProjectDiv projects={projects} />
      <FooterDiv />
    </div>
  );
}

export default App;
