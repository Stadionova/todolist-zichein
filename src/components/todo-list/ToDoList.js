import React, { Component } from 'react';
import './ToDoList.css';
import Task from './Task.js';
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
        };
    }

    createNewTask(task) {

        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(taskId) {

        const newTasksList = this.state.tasks.filter((t) => {
            return t.id !== taskId;
        });

        this.setState({
            tasks: newTasksList
        });
    }

    updateTask(task) {

        const newTasksList = [...this.state.tasks];

        newTasksList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone;
                return;
            }
        })

        this.setState({
            tasks: newTasksList
        });
    }

    render() {
        return (
            <div className='todolist'>
                <ToDoListTaskCreator onCreate={this.createNewTask.bind(this)} />
                <TasksList tasks={this.state.tasks}
                    onDelete={this.deleteTask.bind(this)}
                    onUpdate={this.updateTask.bind(this)} />
                <ToDoListFooter />
            </div >
        );
    }
}

export default ToDoList;