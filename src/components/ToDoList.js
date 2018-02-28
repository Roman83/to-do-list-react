import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './ToDoListItem';

export default class ToDoList extends Component {
    render() {
        const list = this.props.list.map(
            (item) => <ToDoListItem key={item.id} item={item}
                delete={() => { this.props.delete(item.id); }}
                edit={() => this.props.edit(item)}
                lang={this.props.lang} />
        );
        return <ul>{list}</ul>;
    }
}

ToDoList.propTypes = {
    list: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    lang: PropTypes.object.isRequired
};
