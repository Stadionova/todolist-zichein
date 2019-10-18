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

        task.isDone = !task.isDone;
        this.parentUpdateCallback(task);

    }

    startEditTaskStatus(e) {
        var task = this.props.task;
        task.editing = true;
        this.parentUpdateCallback(task);
    }

    finishEditTaskStatus(e) {
        if (e.key === "Enter") {
            var task = this.props.task;
            task.editing = false;
            this.parentUpdateCallback(task);
        }
    }

    editTask(e) {
        var task = this.props.task;
        task.title = e.target.value;
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
                {this.props.task.editing ? (
                    <input
                        type="text"
                        value={this.props.task.title}
                        onChange={this.editTask.bind(this)}
                        onKeyPress={this.finishEditTaskStatus.bind(this)}
                    />
                ) : (
                        <span onClick={this.startEditTaskStatus.bind(this)}>
                            {this.props.task.title}
                        </span>
                    )}
                {/* на span нужно повесить обработчик: deleteTask события onclick */}
                {/* где item - это таск, который нужно удалить */}
                <span className='delete'
                    onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;