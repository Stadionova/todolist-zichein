import React, { Component } from 'react';
import './ToDoList.css';

// todolist:
// add task
// delete task
// edit task
// check done tasks (checkbox)
// strike out task is it done

class ToDoList extends Component {

    constructor(props) {

        super();

        this.state = {
            tasks: [
                {
                    title: 'learn js',
                    isDone: false
                },
                {
                    title: 'learn react',
                    isDone: false
                },
                {
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
                tasks: [...this.state.tasks, { title: e.currentTarget.value, isDone: false }]
            })
            // и value в input должен очищаться
            e.currentTarget.value = '';
        }
    }

    // метод, удаляющий таску:
    // где task == item

    deleteTask(task, e) {
        this.setState({
            tasks: this.state.tasks.filter((t) => {
                return t !== task;
            })
        });
    }

    // метод, помечающий таску как выполненную:

    toggleTaskStatus(task, e) {
        task.isDone = !task.isDone;
    }

    render() {
        return (
            <div className='todolist'>
                <div className="heder">
                    <input onKeyPress={this.createNewTask.bind(this)} />
                </div>
                <div className='tasks'>

                    {
                        this.state.tasks.map((task) => {
                            // будет добавляться два класса: task и done, если таска выполнена
                            // если не выполнена, то будет добавляться только класс: task
                            return <div className={!task.isDone ? 'task done' : 'task'}>
                                {/* навесила обработчик события на клик по чекбоксу */}
                                <input type='checkbox' onClick={this.toggleTaskStatus.bind(this, task)} />
                                {task.title}
                                {/* на span нужно повесить обработчик: deleteTask события onclick */}
                                {/* где item - это таск, который нужно удалить */}
                                <span className='delete' onClick={this.deleteTask.bind(this, task)}>x</span>
                            </div>
                        })
                    }

                </div>
            </div >
        );
    }
}

export default ToDoList;