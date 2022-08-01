import React from 'react';

function footer() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                <button type="button" className="btn btn-outline-dark"><i className="bi bi-github"></i></button>
                <button type="button" className="btn btn-outline-dark"><i className="bi bi-linkedin"></i></button>
                <button type="button" className="btn btn-outline-dark"><i className="bi bi-envelope-fill"></i></button>
            </div>
        </div>
    )
}

export default footer;