import React, { Component } from 'react';
import Task from './Task.js';

class TasksList extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div className='tasks'>
                {
                    this.props.tasks.map((task, index) => {
                        return <Task task={task}
                            updateCallback={this.props.onUpdate}
                            deleteCallback={this.props.onDelete}
                            key={task.id} />
                    })
                }
            </div>
        );
    }
}

export default TasksList;