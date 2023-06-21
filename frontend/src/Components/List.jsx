import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ToDo from './ToDo';
import OnProgress from './OnProgress';
import Completed from './Completed';

const List = () => {

    const onDragEnd = (result) => {
        if (!result.destination) return;
    };

    return (
        <div className="list">
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <ToDo />
                <OnProgress />
                <Completed />
            </DragDropContext>
        </div>
    );
};

export default List;
