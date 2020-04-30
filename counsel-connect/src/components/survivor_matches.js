import React, { Component } from 'react';

const survivor_matches = (props) => {
    return (
        <div className="survivor_matches_home">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Civil Seeker</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Matches <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Resources</a>
                            <a class="nav-item nav-link" href="#">Settings</a>
                        </div>
                    </div>
            </nav>
            
        </div>
    )
}


export default survivor_matches;