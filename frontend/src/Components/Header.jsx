import React from 'react';
import Projects from './Projects';

const Header = () => {
    return (
        <div className="header-width">
            <div className='header'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="search-top">
                            <label>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="search" placeholder='Search for anything...' />
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-top-icons">
                            <div className="profile">
                                <div className="details">
                                    <p className="name">Sanjay Sokal</p>
                                    <p className="location">Haryana, India</p>
                                </div>
                                <img src="https://sanjaysokal.com/favicon.png" title='Sanjay Sokal' alt="Sanjay Sokal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Projects />
        </div>
    )
}

export default Header
