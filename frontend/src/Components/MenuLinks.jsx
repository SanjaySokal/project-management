import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../images/home-link-icon.png'
import img2 from '../images/image-message.png';
import img3 from '../images/image-task.png';
import img4 from '../images/image-members.png';
import img5 from '../images/image-settings.png';

const MenuLinks = () => {
    return (
        <div className='links'>
            <NavLink className={"active"} to={""}>
                <img src={img} alt='' />
                <span>Home</span>
            </NavLink>
            <NavLink to={"/about"}>
                <img src={img2} alt='' />
                <span>Messages</span>
            </NavLink>
            <NavLink to={"/about"}>
                <img src={img3} alt='' />
                <span>Tasks</span>
            </NavLink>
            <NavLink to={"/about"}>
                <img src={img4} alt='' />
                <span>Members</span>
            </NavLink>
            <NavLink to={"/about"}>
                <img src={img5} alt='' />
                <span>Settings</span>
            </NavLink>
        </div>
    )
}

export default MenuLinks
