import React, { Component } from 'react';

class Task extends Component {

    // title и isDone попадают в props
    // props - это объект с двумя свойствами: title & isDone
    constructor(props) {

        super();

        // если мы передаём props не по отдельности
        // а таск целиком, то переделываем объект
        this.state = {
            task: props.task
            // title: props.title,
            // isDone: props.isDone
        };

        this.parentDeleteCallback = props.deleteCallback;
    }

    // метод, удаляющий таску:

    deleteTask(e) {
        this.parentDeleteCallback(this.state.task);
    }

    // метод, помечающий таску как выполненную:

    toggleTaskStatus(e) {
        var newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        };

        this.setState({
            task: newTask
        });
    }

    render() {
        return (
            // будет добавляться два класса: task и done, если таска выполнена
            // если не выполнена, то будет добавляться только класс: task
            <div className={this.state.task.isDone ? 'task done' : 'task'}>
                {/* навесила обработчик события на клик по чекбоксу */}
                <input type='checkbox' checked={this.state.task.isDone} onClick={this.toggleTaskStatus.bind(this)} />
                {this.state.task.title}
                {/* на span нужно повесить обработчик: deleteTask события onclick */}
                {/* где item - это таск, который нужно удалить */}
                <span className='delete' onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;