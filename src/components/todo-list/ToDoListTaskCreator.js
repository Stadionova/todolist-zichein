import React, { Component } from 'react';

class ToDoListTaskCreator extends Component {

    constructor(yo) {

        super(yo);

        this.newIndex = 3;

    }

    // метод, добавляющий новую таску:

    createNewTask(e) {
        if (e.key === 'Enter') {
            const newTask = {
                title: e.currentTarget.value,
                isDone: false,
                id: this.newIndex
            };

            this.props.onCreate(newTask);

            e.currentTarget.value = '';
            this.newIndex++;
        }
    }

    render() {
        return (
            <div className="header">
                <input onKeyPress={this.createNewTask.bind(this)} />
            </div>
        );
    }
}

export default ToDoListTaskCreator;