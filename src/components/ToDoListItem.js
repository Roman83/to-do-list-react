import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as status from '../constants/ItemStatus';

export default class ToDoListItem extends Component {
    render() {
        let itemStatus = '';
        switch(this.props.item.status) {
        case status.ACTIVE:
            itemStatus = 'Active'; break;
        case status.COMPLETED:
            itemStatus = 'Completed'; break;
        case status.SUSPENDED:
            itemStatus = 'Suspended'; break;
        }

        return <li>{this.props.item.title}<span>{itemStatus}</span></li>;
    }
}

ToDoListItem.propTypes = {
    item: PropTypes.array.isRequired
};
