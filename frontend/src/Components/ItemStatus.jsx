import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const ItemStatus = (props) => {
    return (
        <Draggable>
            {(provided) => {
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
            }}
        </Draggable>
    )
}

export default ItemStatus
