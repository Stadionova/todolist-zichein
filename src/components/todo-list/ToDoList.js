import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {

    constructor(props) {

        super();

        this.state = {
            tasks: ['learn js', 'learn react', 'learn layout']
        };
    }

    // создаю метод, который будет принимать event
    // при нажатии на клавишу enter, пушу новый таск
    // затем в task присваиваю этот новый массив
    // e - это event

    createNewTask(e) {
        if (e.key === 'Enter') {
            let newTasksList = this.state.tasks;
            // при нажатии на enter новый таск должен пушиться
            newTasksList.push(e.currentTarget.value);

            // и value в input должен очищаться
            e.currentTarget.value = '';

            this.setState({
                tasks: newTasksList
            })
        }
    }

    render() {
        return (
            <div className='todolist'>
                <div className="heder">
                    <input onKeyPress={this.createNewTask.bind(this)} />
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