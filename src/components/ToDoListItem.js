import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as status from '../constants/ItemStatus';

export default class ToDoListItem extends Component {
    render() {
        let itemStatus = '';
        let className = '';
        switch(this.props.item.status) {
        case status.ACTIVE:
            itemStatus = 'Active';
            className = 'active';
            break;
        case status.COMPLETED:
            itemStatus = 'Completed';
            className = 'completed';
            break;
        case status.SUSPENDED:
            itemStatus = 'Suspended';
            className = 'suspended';
            break;
        }

        return <li className={className}>
            <span className='title'>{this.props.item.title}</span>
            <span className="status">{itemStatus}</span>
            <br/>
            <div className="itemControls">
                <button onClick={this.props.delete}>Delete</button>
                <button onClick={this.props.edit}>Edit</button>
            </div>
        </li>;
    }
}

ToDoListItem.propTypes = {
    item: PropTypes.array.isRequired
};
