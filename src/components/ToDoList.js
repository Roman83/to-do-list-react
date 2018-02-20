import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './ToDoListItem';

export default class ToDoList extends Component {
    render() {
        const list = this.props.list.map(
            (item) => <ToDoListItem key={item.id} item={item} />
        );
        return <ul>{list}</ul>;
    }
}

ToDoList.propTypes = {
    list: PropTypes.array.isRequired
};
