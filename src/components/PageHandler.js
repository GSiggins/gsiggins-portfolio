import AboutMe from './AboutMe'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Navbar from './Navbar'
import Projects from './Projects'
import React, { useState } from 'react';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('aboutMe');

    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'projects') {
            return <Projects />;
        }
        if (currentPage === 'contactForm') {
            return <ContactForm />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
