import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ItemStatus from './ItemStatus';
import { Droppable } from 'react-beautiful-dnd';

const ToDo = () => {
    let arr = [
        { priority: 'low', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." },
        { priority: 'medium', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." },
        { priority: 'high', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." }
    ];

    return (
        <Droppable droppableId={'todo'} type="todo">
            {(provided) => (
                <div className="list-item" ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="list-padding">
                        <div className='todo list-head'>
                            <div className="heading">
                                <h4>To Do</h4>
                                <button>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        {arr.map((item, ind) => (
                            <ItemStatus key={ind} id={ind} priority={item.priority} heading={item.heading} para={item.para} />
                        ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default ToDo;
