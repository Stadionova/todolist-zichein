import React, { Component } from 'react';
import './ToDoList.css';
import Task from './Task.js';

// todolist:
// add task
// delete task
// edit task
// check done tasks (checkbox)
// strike out task is it done

class ToDoList extends Component {

    constructor(props) {

        super();

        this.newIndex = 3;

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
                tasks: [...this.state.tasks, {
                    title: e.currentTarget.value,
                    isDone: false,
                    id: this.newIndex
                }]
            })
            // и value в input должен очищаться
            e.currentTarget.value = '';
            this.newIndex++;
        }
    }

    // метод, удаляющий таску:

    deleteTask(task) {

        const newTasksList = this.state.tasks.filter((t) => {
            return t.id !== task.id;
        });

        this.setState({
            tasks: newTasksList
        });
    }

    render() {
        return (
            <div className='todolist'>
                <div className="heder">
                    <input onKeyPress={this.createNewTask.bind(this)} />
                </div>
                <div className='tasks'>

                    {
                        this.state.tasks.map((task, index) => {
                            // будет добавляться два класса: task и done, если таска выполнена
                            // если не выполнена, то будет добавляться только класс: task

                            // эти title и isDone попадаю в файл Task.js в props
                            // чтобы не передавать все проперти по отдельности, передадим сам таск

                            // return <Task title={task.title} isDone={task.isDone} />
                            return <Task task={task} deleteCallback={this.deleteTask.bind(this)} key={task.id} />

                            // <div className={task.isDone ? 'task done' : 'task'}>
                            //     {/* навесила обработчик события на клик по чекбоксу */}
                            //     <input type='checkbox' onClick={this.toggleTaskStatus.bind(this, task)} />
                            //     {task.title}
                            //     {/* на span нужно повесить обработчик: deleteTask события onclick */}
                            //     {/* где item - это таск, который нужно удалить */}
                            //     <span className='delete' onClick={this.deleteTask.bind(this, task)}>x</span>
                            // </div>
                        })
                    }
                </div>
            </div >
        );
    }
}

export default ToDoList;