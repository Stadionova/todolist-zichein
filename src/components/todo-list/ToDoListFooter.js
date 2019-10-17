import React, { Component } from 'react';

class ToDoListFooter extends Component {

    // метод render - это отрисовка
    render() {
        return (
            <div className='todolist-footer'>
                <div>
                    <span>5 items left</span>
                </div>
                <div className="buttons">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <div>
                    Clear completed
                </div>
            </div>
        );
    }
}

export default ToDoListFooter;