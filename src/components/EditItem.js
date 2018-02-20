import React, { Component } from 'react';

export default class EditItem extends Component {
    constructor(props) {
        super(props);
        this.saveItem = this.saveItem.bind(this);
    }
    
    saveItem() {
        //console.log(this.title);
        this.props.submit(this.title.value);
        //console.log(this.title);
    }
    
    render() {
        return  <div>
            <input type='text'
                ref={(input) => { this.title = input; }}
                defaultValue={this.props.title} />
            <button onClick={this.saveItem}>OK</button>
        </div>;
    }
}




