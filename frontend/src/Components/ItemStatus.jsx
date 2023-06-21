import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ItemStatus = (props) => {
    return (
        <Draggable draggableId={"todo" + props.id} index={props.id}>
            {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="top-btns">
                        <p className={`priority ${props.priority}`}>
                            {props.priority.charAt(0).toUpperCase() + props.priority.slice(1)}
                        </p>
                        <span className="link">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </div>
                    <div className="inner-content">
                        <h4>{props.heading}</h4>
                        <p>{props.para}</p>
                    </div>
                    {provided.placeholder}
                </li>
            )}
        </Draggable>
    );
};

export default ItemStatus;
