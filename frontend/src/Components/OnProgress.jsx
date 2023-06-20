import React from 'react'
import ItemStatus from './ItemStatus'

const OnProgress = () => {
    let arr = [
        { priority: "low", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "medium", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." },
        { priority: "high", heading: "Brainstorming", para: "Brainstorming brings team members' diverse experience into play." }
    ];
    return (
        <div className="list-item">
            <div className="list-padding">
                <div className='on-progress list-head'>
                    <div className="heading">
                        <h4>On Progress</h4>
                    </div>
                </div>
                {
                    arr.map((item, ind) => <ItemStatus key={ind} priority={item.priority} heading={item.heading} para={item.para} />)
                }
            </div>
        </div>
    )
}

export default OnProgress
