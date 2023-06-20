import React from 'react'
import ItemStatus from './ItemStatus'
import { Droppable } from 'react-beautiful-dnd';

const OnProgress = () => {
    let arr = [
        { priority: "low", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "medium", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "high", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." }
    ];
    return (
        <Droppable droppableId='progress'>
            {(provided) => {
                <div className="list-item" ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="list-padding">
                        <div className='on-progress list-head'>
                            <div className="heading">
                                <h4>On Progress</h4>
                            </div>
                        </div>
                        {
                            arr.map((item, ind) => <ItemStatus key={ind} id={ind} priority={item.priority} heading={item.heading} para={item.para} />)
                        }
                    </div>
                    {provided.placeholder}
                </div>
            }}
        </Droppable>
    )
}

export default OnProgress
