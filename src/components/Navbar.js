import React from 'react';

function mainPage() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#home"
                                onClick={() => handlePageChange('aboutMe')}
                                className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#Projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="#home"
                                onClick={() => handlePageChange('contactForm')}
                                className={currentPage === 'contactForm' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Project Quick Links
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Project1</a></li>
                                <li><a class="dropdown-item" href="#">Project2</a></li>
                                <li><a class="dropdown-item" href="#">Project3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}


export default mainPage;