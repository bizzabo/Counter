import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {decrementActionChanged, incrementActionChanged} from '../actions/actions'

const mapStateToProps = (state) => {
    const {counterReducer} = state;
    return {counter: counterReducer}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        decrementActionChanged,
        incrementActionChanged
    }, dispatch);
};


class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this);
        this.decrementAsync = this.decrementAsync.bind(this);
    }

    incrementAsync() {
        setTimeout(this.props.incrementActionChanged, 1000)
    }

    decrementAsync() {
        setTimeout(this.props.decrementActionChanged, 1000)
    }

    incrementClicked() {
        this.props.incrementActionChanged();
    }

    decrementClicked() {
        this.props.decrementActionChanged();
    }

    render() {
        const {counter} = this.props;
        return (
            <div>
                <h1>React Redux Counter App</h1>
                <p>
                    Clicked: {counter} times
                    {' '}
                    <button onClick={this.incrementClicked.bind(this)}>+</button>
                    {' '}
                    <button onClick={this.decrementClicked.bind(this)}>-</button>
                    {' '}
                    <button onClick={this.incrementAsync}>Increment Timeout</button>
                    {' '}
                    <button onClick={this.decrementAsync}>Decrement Timeout</button>
                </p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
