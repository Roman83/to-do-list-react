import React, { Component } from 'react';
import ToDoList from './ToDoList';
import EditItem from './EditItem';

const LIST_MODE = 'LIST_MODE';
const EDIT_MODE = 'EDIT_MODE';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: 'Task 1'},
                {id: 2, title: 'Task 2'},
                {id: 3, title: 'Task 3'}
            ],
            mode: LIST_MODE
        };
        this.addItem = this.addItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
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
            {this.state.mode === EDIT_MODE && <EditItem submit={this.saveItem}/>}
        </div>;
    }

    addItem() {
        this.setState({ mode: EDIT_MODE } );
    }

    saveItem(title) {
        let list = [...this.state.list];
        let newId = 1 + list.reduce((res, v) => Math.max(v, res), 0);
        list.push({id: newId, title: title});
        this.setState({
            list: list,
            mode: LIST_MODE
        });
    }
}
