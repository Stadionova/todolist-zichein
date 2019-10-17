import React, { Component } from 'react';

class Task extends Component {

    constructor(props) {

        super();

        this.state = {
            title: props.title,
            isDone: props.isDone
        };
    }

    // метод, удаляющий таску:

    deleteTask(e) {

    }

    // метод, помечающий таску как выполненную:

    toggleTaskStatus(e) {
        // task.isDone = !task.isDone;
        this.forceUpdate();
    }

    render() {
        return (
            // будет добавляться два класса: task и done, если таска выполнена
            // если не выполнена, то будет добавляться только класс: task
            <div className={this.state.isDone ? 'task done' : 'task'}>
                {/* навесила обработчик события на клик по чекбоксу */}
                <input type='checkbox' onClick={this.toggleTaskStatus.bind(this)} />
                {this.state.title}
                {/* на span нужно повесить обработчик: deleteTask события onclick */}
                {/* где item - это таск, который нужно удалить */}
                <span className='delete' onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;