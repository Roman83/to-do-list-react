import React, { Component } from 'react';
import ToDoList from './ToDoList';
import EditItem from './EditItem';
import * as status from '../constants/ItemStatus';
import Lang from '../constants/lang.js';

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
            mode: LIST_MODE,
            lang: Lang.eng
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.backToList = this.backToList.bind(this);
        this.changeLang = this.changeLang.bind(this);
    }
    
    render() {
        let lang = this.state.lang;
        return <div>
            <h1>To-Do list!</h1>
            {this.state.mode === LIST_MODE &&
             <div>
                 <ToDoList list={this.state.list} delete={this.deleteItem}
                     edit={this.addItem} lang={lang}/>
                 <button className='addButton' onClick={this.addItem}>
                     <i className='material-icons md-12'>add_circle</i>{lang.add}
                 </button>
                 <button onClick={this.changeLang}>{lang.id}</button>
             </div>
            }
            {this.state.mode === EDIT_MODE &&
             <EditItem item={this.state.curItem} submit={this.saveItem}
                 cancel={this.backToList}/>}
        </div>;
    }

    changeLang() {
        if (this.state.lang.id === 'RUS') {
            this.setState({ lang: Lang.eng });
        } else {
            this.setState({ lang: Lang.rus });
        }
    }
    
    deleteItem(id) {
        this.setState({
            list: this.state.list.filter((v) => v.id !== id),
            mode: LIST_MODE
        });
    }

    addItem(item) {
        this.setState({ mode: EDIT_MODE, curItem: item} );
    }

    backToList() {
        this.setState({ mode: LIST_MODE });
    }

    saveItem(title, status, id) {
        let list = [...this.state.list];
        if (id) {
            list = list.filter((v) => v.id !== id);
        } else {
            id = 1 + list.reduce((res, v) => Math.max(v.id, res), 0);
        }
        list.push({id: id, title: title, status: status});
        this.setState({
            list: list,
            mode: LIST_MODE
        });
    }
}
