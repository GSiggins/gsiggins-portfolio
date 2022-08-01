import React from 'react';

function navBar(currentPage, handlePageChange) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Greg Siggins Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#home"
                                onClick={() => handlePageChange('aboutMe')}
                                className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#home"
                                onClick={() => handlePageChange('contactForm')}
                                className={currentPage === 'contactForm' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Project Quick Links
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Project1</a></li>
                                <li><a className="dropdown-item" href="#">Project2</a></li>
                                <li><a className="dropdown-item" href="#">Project3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}


export default navBar;