import React, { Component } from 'react';

class Task extends Component {

    // title и isDone попадают в props
    // props - это объект с двумя свойствами: title & isDone
    constructor(props) {

        super();

        this.parentDeleteCallback = props.deleteCallback;
        this.parentUpdateCallback = props.updateCallback;

    }

    // метод, удаляющий таску:

    deleteTask(e) {
        this.parentDeleteCallback(this.props.task.id);
    }

    // метод, помечающий таску как выполненную:

    toggleTaskStatus(e) {
        // var newTask = {
        //     ...this.state.task,
        //     isDone: !this.state.task.isDone
        // };
        var task = {
            ...this.props.task
        };

        task.isDone = !this.isDone;
        this.parentUpdateCallback(task);

    }

    render() {
        return (
            // будет добавляться два класса: task и done, если таска выполнена
            // если не выполнена, то будет добавляться только класс: task
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                {/* навесила обработчик события на клик по чекбоксу */}
                <input type='checkbox'
                    checked={this.props.task.isDone}
                    onClick={this.toggleTaskStatus.bind(this)} />
                {this.props.task.title}
                {/* на span нужно повесить обработчик: deleteTask события onclick */}
                {/* где item - это таск, который нужно удалить */}
                <span className='delete'
                    onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;