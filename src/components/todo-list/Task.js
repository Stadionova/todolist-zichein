import React, { Component } from 'react';

class Task extends Component {

    constructor(props) {

        super();

        this.parentDeleteCallback = props.deleteCallback;
        this.parentUpdateCallback = props.updateCallback;

    }

    deleteTask(e) {
        this.parentDeleteCallback(this.props.task.id);
    }

    toggleTaskStatus(e) {

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
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
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
                <span className='delete'
                    onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;