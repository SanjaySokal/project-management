import React from 'react'
import { DragDropContext } from "react-beautiful-dnd"
import ToDo from './ToDo'
import OnProgress from './OnProgress'
import Completed from './Completed'

const List = () => {
    return (
        <DragDropContext onDragEnd={() => console.log("ended")}>
            <div className="list">
                <ToDo />
                <OnProgress />
                <Completed />
            </div>
        </DragDropContext>
    )
}

export default List
