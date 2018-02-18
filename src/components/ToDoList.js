import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToDoList extends Component {
    render() {
        const list = this.props.list.map((item) => (
            <li key={item.id}>{item.title}</li>
        ));
        return <ul>{list}</ul>;
    }
}

ToDoList.propTypes = {
    list: PropTypes.array.isRequired
};
