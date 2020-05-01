import React, { Component } from 'react';

const SurvivorMatches = (props) => {
    return (
        <div className="survivor_matches_home">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Civil Seeker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Matches</a>
                            <a className="nav-item nav-link" href="#">Resources</a>
                            <a className="nav-item nav-link" href="#">Settings</a>
                        </div>
                    </div>
            </nav>
            
        </div>
    )
}


export default SurvivorMatches;