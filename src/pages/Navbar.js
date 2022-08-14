import React from 'react';


function NavBar({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#AboutMe">Greg Siggins Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#AboutMe"
                                onClick={() => handlePageChange('AboutMe')}
                                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#ContactForm"
                                onClick={() => handlePageChange('ContactForm')}
                                className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                        </li>
                        <li className="nav-item dropdown">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}


export default NavBar;