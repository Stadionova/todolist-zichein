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
            // новый синтаксис spread [...] вместо:
            // let newTasksList = this.state.tasks;
            // при нажатии на enter новый таск должен пушиться
            // newTasksList.push(e.currentTarget.value);
            // создаю новый массив, который будет состоять из старого массива и нового таска
            // эта же запись, но длинней, чтобы не перечислять все элементы, которых может быть очень много:
            // tasks: [this.state.tasks[0], this.state.tasks[1], this.state.tasks[2]]

            this.setState({
                // все элементы старого массива: ...this.state.tasks
                // новый таск: e.currentTarget.value
                tasks: [...this.state.tasks, e.currentTarget.value]
            })
            // и value в input должен очищаться
            e.currentTarget.value = '';
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