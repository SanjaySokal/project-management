import React from 'react';
import { Link } from "react-router-dom";
import img from "../images/logo image.png";
import MenuLinks from './MenuLinks';

const Menu = () => {
    return (
        <div className='menu'>
            <div className="logo">
                <Link to={"/"} className="img">
                    <img src={img} alt='logo' />
                    <span>Project M.</span>
                </Link>
                <div className="menu-close">
                    <button>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                </div>
            </div>
            <div className="menu-links">
                <MenuLinks />
            </div>
            <div className="seperator-line"></div>
            <div className="project-links">
            </div>
        </div>
    )
}

export default Menu
