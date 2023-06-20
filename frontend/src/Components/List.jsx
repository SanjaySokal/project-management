import React from 'react'

const List = () => {
    return (
        <div className="list">
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
                </div>
            </div>
        </div>
    )
}

export default List
