import React, { Component } from 'react';
import './ToDoList.css';
import ToDoListFooter from './ToDoListFooter.js';
import ToDoListTaskCreator from './ToDoListTaskCreator.js';
import TasksList from './TasksList.js';

// todolist:
// add task
// delete task
// edit task
// check done tasks (checkbox)
// strike out task is it done

class ToDoList extends Component {

    constructor() {

        super();

        this.state = {
            tasks: [
                {
                    id: 0,
                    title: 'learn js',
                    isDone: false
                },
                {
                    id: 1,
                    title: 'learn react',
                    isDone: false
                },
                {
                    id: 2,
                    title: 'learn layout',
                    isDone: false
                }
            ]
            // объекты вместо массива ['learn js', 'learn react', 'learn layout']
        };
    }

    // создаю метод, который будет принимать event
    // при нажатии на клавишу enter, пушу новый таск
    // затем в task присваиваю этот новый массив
    // e - это event

    // метод, добавляющий новую таску:

    createNewTask(task) {
        // if (e.key === 'Enter') {
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
            tasks: [...this.state.tasks, task]
        });
    }

    // метод, удаляющий таску:

    deleteTask(taskId) {

        const newTasksList = this.state.tasks.filter((t) => {
            return t.id !== taskId;
        });

        this.setState({
            tasks: newTasksList
        });
    }

    render() {
        return (
            <div className='todolist'>
                <ToDoListTaskCreator onCreate={this.createNewTask.bind(this)} />
                <TasksList tasks={this.state.tasks}
                    onDelete={this.deleteTask.bind(this)} />
                <ToDoListFooter />
            </div >
        );
    }
}

export default ToDoList;