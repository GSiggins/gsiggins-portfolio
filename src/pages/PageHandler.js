import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import NavBar from './Navbar'
import Projects from '../components/Projects'
import React, { useState } from 'react';
import PlannerImg from '../img/ingredients.png'

let projectArray = [{
    projectName: "Daily Planner",
    projectDesc: "A simple planning app for scheduling your work day.",
    projectLink: "https://gsiggins.github.io/gsiggins-planner/",
    projectGithub: "https://github.com/GSiggins/gsiggins-planner",
    projectImg: {PlannerImg}
  },
  {
    projectName: "Note Taker",
    projectDesc: "Take notes on classes, meetings, or daily tasks.",
    projectLink: "https://vast-peak-19005.herokuapp.com/",
    projectGithub: "https://github.com/GSiggins/note-buddy",
    projectImg: "../img/notetaker.png"
  },
  {
    projectName: "Ingredients",
    projectDesc: "Query third party APIs to return recipes ",
    projectLink: "https://gsiggins.github.io/ingredients/",
    projectGithub: "https://github.com/GSiggins/ingredients",
    projectImg: "../src/img/ingredients.png"
  },
  {
    projectName: "Popcorn Pal",
    projectDesc: "A review based app, letting users grade local theaters based on multiple criteria.",
    projectLink: "https://enthousiaste-croissant-93148.herokuapp.com/",
    projectGithub: "https://github.com/GSiggins/bcs-2-app",
    projectImg: ""
  },
  {
    projectName: "Tech Den",
    projectDesc: "A blog-style app that allows users to share opinions on tech that they have recently bought",
    projectLink: "https://young-wave-59701.herokuapp.com/",
    projectGithub: "https://github.com/GSiggins/tech-news",
    projectImg: ""
  },
  {
    projectName: "Employer Directory",
    projectDesc: "A command line application to track employees, their departments, and salaries.",
    projectLink: "https://drive.google.com/file/d/12akeUONtNntUCf6jBotubTaZVAlFil9F/view",
    projectGithub: "https://github.com/GSiggins/payroll-pal",
    projectImg: ""
  }
  ]



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects 
            projectArray={projectArray}
            />;
        }
        if (currentPage === 'ContactForm') {
            return <ContactForm />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
    
}

