import React from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import ToDo from './ToDo'
import OnProgress from './OnProgress'
import Completed from './Completed'

const List = () => {
    return (
        <div className="list">
            <DragDropContext onDragEnd={() => { }}>
                <Droppable droppableId='todo'>
                    {
                        (provided) => {
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <ToDo />
                            </div>
                        }
                    }
                </Droppable>
                <Droppable droppableId='progress'>
                    {
                        (provided) => {
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <OnProgress />
                            </div>
                        }
                    }
                </Droppable>
                <Droppable droppableId='completed'>
                    {
                        (provided) => {
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <Completed />
                            </div>
                        }
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default List
