import React from 'react'
import ToDo from './ToDo'
import OnProgress from './OnProgress'
import Completed from './Completed'

const List = () => {
    return (
        <div className="list">
            <ToDo />
            <OnProgress />
            <Completed />
        </div>
    )
}

export default List
