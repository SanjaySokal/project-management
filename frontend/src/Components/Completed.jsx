import React from 'react';
import ItemStatus from './ItemStatus';
import { Droppable } from 'react-beautiful-dnd';

const Completed = () => {
    let arr = [
        { priority: 'completed', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." },
        { priority: 'completed', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." },
        { priority: 'completed', heading: 'Brainstorming', para: "Brainstorming brings team members' diverse experience into play." }
    ];

    return (
        <Droppable droppableId={'completed'} type="completed">
            {(provided) => (
                <div className="list-item" ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="list-padding">
                        <div className='completed list-head'>
                            <div className="heading">
                                <h4>Completed</h4>
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

export default Completed;
