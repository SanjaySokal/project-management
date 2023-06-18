import React from 'react';
import img from '../images/calender.png'
import img2 from '../images/help.png'
import img3 from '../images/notifications.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="row">
                <div className="col-md-6">
                    <div className="search-top">
                        <label>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Search for anything...' />
                        </label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-top-icons">
                        <div className="icons">
                            <Link to={""}>
                                <img src={img} alt={img} title={img} />
                            </Link>
                            <Link to={""}>
                                <img src={img2} alt={img2} title={img2} />
                            </Link>
                            <Link to={""}>
                                <img src={img3} alt={img3} title={img3} />
                            </Link>
                        </div>
                        <div className="profile">
                            <div className="details">
                                <p className="name">Anima Agrawal</p>
                                <p className="location">Haryana, India</p>
                            </div>
                            <img src="https://sanjaysokal.com/favicon.png" title='Sanjay Sokal' alt="Sanjay Sokal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
