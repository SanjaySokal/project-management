import React from 'react';
import { Link } from "react-router-dom";
import img from "../images/logo image.png";
import MenuLinks from './MenuLinks';
import ProjectLinks from './ProjectLinks';

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
                <div className="heading">
                    <span>My Projects</span>
                    <button><i className="fa-solid fa-plus"></i></button>
                </div>
                <ProjectLinks />
            </div>
            <div className='thought'>
                <div className="icon">
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h4>Thoughts Time</h4>
                <p>
                    We don’t have any notice for you, till then you can share your thoughts with your peers.
                </p>
                <button>Write a message</button>
            </div>
        </div>
    )
}

export default Menu
