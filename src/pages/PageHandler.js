import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import NavBar from './Navbar'
import Projects from '../components/Projects'
import React, { useState } from 'react';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
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

