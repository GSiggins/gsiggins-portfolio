import React from 'react';

function Footer() {
    return (
        <div className='d-flex justify-content-center fixed-bottom bg-white'>
            <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                <a type="button" className="btn btn-outline-dark" href='https://github.com/GSiggins'><i className="bi bi-github"></i></a>
                <a href='https://www.linkedin.com/in/gregory-siggins/' type="button" className="btn btn-outline-dark" ><i className="bi bi-linkedin"></i></a>
                <a type="button" href="mailto:gregory.siggins@gmail.com" className="btn btn-outline-dark"><i className="bi bi-envelope-fill"></i></a>
            </div>
        </div>
    )
}

export default Footer;