import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {

    constructor(props) {

        super();

        this.state = {
            tasks: ['learn js', 'learn react', 'learn layout']
        };

    }

    render() {
        return (
            <div className='todolist'>
                <div className="heder">
                    <input />
                </div>
                <div className='tasks'>

                    {
                        this.state.tasks.map((item) => {
                            return <div className='task'>{item}</div>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ToDoList;