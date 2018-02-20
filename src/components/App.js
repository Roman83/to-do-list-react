import React, { Component } from 'react';
import ToDoList from './ToDoList';
import EditItem from './EditItem';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: 'Task 1'},
                {id: 2, title: 'Task 2'},
                {id: 3, title: 'Task 3'}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    
    render() {
        return <div>
            <h1>To-Do list!</h1>
            <ToDoList list={this.state.list}/>
            <EditItem submit={this.addItem}/>
        </div>;
    }

    addItem(title) {
        let list = [...this.state.list];
        let newId = 1 + list.reduce((res, v) => Math.max(v, res), 0);
        list.push({id: newId, title: title});
        this.setState({list: list});
    }
}
