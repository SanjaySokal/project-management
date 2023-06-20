import React from 'react'
import ItemStatus from './ItemStatus';

const Completed = () => {
    let arr = [
        { priority: "completed", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "completed", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "completed", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." }
    ];
    return (

        <div className="list-item">
            <div className="list-padding">
                <div className='completed list-head'>
                    <div className="heading">
                        <h4>Completed</h4>
                    </div>
                </div>
                {
                    arr.map((item, ind) => <ItemStatus key={ind} priority={item.priority} heading={item.heading} para={item.para} />)
                }
            </div>
        </div>
    )
}

export default Completed
