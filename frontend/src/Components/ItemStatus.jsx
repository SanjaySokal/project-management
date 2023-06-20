import React from 'react'

const ItemStatus = (props) => {
    return (
        <li>
            <div className="top-btns">
                <p className={`priority ${props.priority}`}>
                    {props.priority.charAt(0).toUpperCase() + props.priority.slice(1)}
                </p>
                <span className="link"><i className="fa-solid fa-ellipsis"></i></span>
            </div>
            <div className="inner-content">
                <h4>{props.heading}</h4>
                <p>
                    {props.para}
                </p>
            </div>
        </li>
    )
}

export default ItemStatus
