import React, { Component } from 'react';
import ToDoList from './ToDoList';
import EditItem from './EditItem';
import * as status from '../constants/ItemStatus';

const LIST_MODE = 'LIST_MODE';
const EDIT_MODE = 'EDIT_MODE';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: 'Task 1', status: status.ACTIVE},
                {id: 2, title: 'Task 2', status: status.SUSPENDED},
                {id: 3, title: 'Task 3', status: status.COMPLETED}
            ],
            mode: LIST_MODE
        };
        this.addItem = this.addItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.backToList = this.backToList.bind(this);
    }
    
    render() {
        return <div>
            <h1>To-Do list!</h1>
            {this.state.mode === LIST_MODE &&
             <div>
                 <ToDoList list={this.state.list}/>
                 <button onClick={this.addItem}>Add</button>
             </div>
            }
            {this.state.mode === EDIT_MODE &&
             <EditItem submit={this.saveItem} cancel={this.backToList}/>}
        </div>;
    }

    addItem() {
        this.setState({ mode: EDIT_MODE } );
    }

    backToList() {
        this.setState({ mode: LIST_MODE });
    }

    saveItem(title, status) {
        let list = [...this.state.list];
        let newId = 1 + list.reduce((res, v) => Math.max(v, res), 0);
        list.push({id: newId, title: title, status: status});
        this.setState({
            list: list,
            mode: LIST_MODE
        });
    }
}
