import React from 'react';
import { Link } from "react-router-dom";

const ProjectLinks = () => {
    return (
        <div className='links'>
            <Link className='active' to={""}>
                <div className="name">
                    <span className='color color-1'></span>
                    <p>Mobile App</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </Link>
            <Link to={""}>
                <div className="name">
                    <span className='color color-2'></span>
                    <p>Website Redesign</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </Link>
            <Link to={""}>
                <div className="name">
                    <span className='color color-3'></span>
                    <p>Design System</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </Link>
            <Link to={""}>
                <div className="name">
                    <span className='color color-4'></span>
                    <p>Wireframes</p>
                </div>
                <span className='link'><i className="fa-solid fa-ellipsis"></i></span>
            </Link>
        </div>
    )
}

export default ProjectLinks
