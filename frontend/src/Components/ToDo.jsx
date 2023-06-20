import React from 'react'
import ItemStatus from './ItemStatus'

const ToDo = () => {
    let arr = [
        { priority: "low", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "medium", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "high", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." }
    ];
    return (
        <div className="list-item">
            <div className="list-padding">
                <div className='todo list-head'>
                    <div className="heading">
                        <h4>To Do</h4>
                        <button>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                {
                    arr.map((item, ind) => <ItemStatus key={ind} priority={item.priority} heading={item.heading} para={item.para} />)
                }

            </div>
        </div>
    )
}

export default ToDo
