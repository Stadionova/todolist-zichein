import React, { Component } from 'react';

class ToDoListFooter extends Component {

    render() {
        return (
            <div className='todolist-footer'>
                <div className="countTasks">
                    <span>5 items left</span>
                </div>
                <div className="buttons">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        );
    }
}

export default ToDoListFooter;