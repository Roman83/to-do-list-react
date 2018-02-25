import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as status from '../constants/ItemStatus';

export default class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = { status: this.props.item.status || status.ACTIVE };
        this.saveItem = this.saveItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount() {
        this.title.focus();
    }
    
    saveItem() {
        const item = this.props.item || {};
        this.props.submit(this.title.value, this.state.status, item.id);
    }

    changeStatus(e) {
        this.setState({status: e.currentTarget.value});
    }
    
    render() {
        const item = this.props.item || {};
        return <form>
            <input type='text' className='title' placeholder='Title'
                ref={(input) => { this.title = input; }}
                defaultValue={item.title} /><br/>
            <fieldset className='radioStatus'>
                <legend>Status</legend>
                <label>
                    <input type="radio"
                        value={status.ACTIVE}
                        checked={status.ACTIVE === this.state.status}
                        onChange={this.changeStatus} />
                    Active</label><br/>
                <label>
                    <input type="radio"
                        value={status.SUSPENDED}
                        checked={status.SUSPENDED === this.state.status} 
                        onChange={this.changeStatus} />
                Suspended</label><br/>
                <label>
                    <input type="radio"
                        value={status.COMPLETED}
                        checked={status.COMPLETED === this.state.status}
                        onChange={this.changeStatus} />
                Closed</label><br/>
            </fieldset>
            <button type='submit' onClick={this.saveItem}>OK</button>
            <button onClick={this.props.cancel}>Cancel</button>
        </form>;
    }
}

EditItem.defaultProps = {
    title: '',
    status: status.ACTIVE
};

EditItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    submit: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
};
