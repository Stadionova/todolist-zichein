import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToDoList from './components/todo-list/ToDoList';

ReactDOM.render(
    <div>
        <App />

        <ToDoList />

    </div>, document.getElementById('root'));

serviceWorker.unregister();
