import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectLinks = () => {
    return (
        <div className='links'>
            <NavLink className='active' to={""}>
                <div className="name">
                    <span className='color color-1'></span>
                    <p>Mobile App</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </NavLink>
            <NavLink to={"/about"}>
                <div className="name">
                    <span className='color color-2'></span>
                    <p>Website Redesign</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </NavLink>
            <NavLink to={"/about"}>
                <div className="name">
                    <span className='color color-3'></span>
                    <p>Design System</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </NavLink>
            <NavLink to={"/about"}>
                <div className="name">
                    <span className='color color-4'></span>
                    <p>Wireframes</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </NavLink>
        </div>
    )
}

export default ProjectLinks
