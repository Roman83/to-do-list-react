import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as status from '../constants/ItemStatus';

export default class ToDoListItem extends Component {
    render() {
        let itemStatus = '';
        let className = '';
        const lang = this.props.lang;
        switch(this.props.item.status) {
        case status.ACTIVE:
            itemStatus = lang.active;
            className = 'active';
            break;
        case status.COMPLETED:
            itemStatus = lang.completed;
            className = 'completed';
            break;
        case status.SUSPENDED:
            itemStatus = lang.suspended;
            className = 'suspended';
            break;
        }

        return <li className={className}>
            <span className='title'>{this.props.item.title}</span>
            <span className="status">{itemStatus}</span>
            <br/>
            <div className="itemControls">
                <button onClick={this.props.delete}>
                    <i className='material-icons'>delete_forever</i>{lang.del}
                </button>
                <button onClick={this.props.edit}>
                    <i className='material-icons'>mode_edit</i>{lang.edit}
                </button>
            </div>
        </li>;
    }
}

ToDoListItem.propTypes = {
    item: PropTypes.array.isRequired
};
