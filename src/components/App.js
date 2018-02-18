import React, { Component } from 'react';
import ToDoList from './ToDoList';

export default class App extends Component {
    render() {
        const list = [
            {id: 1, title: 'Task 1'},
            {id: 2, title: 'Task 2'},
            {id: 3, title: 'Task 3'}
        ];
        return <div>
            <h1>To-Do list!</h1>
            <ToDoList list={list}/>
        </div>;
    }
}
