import {
	INCREMENT,
    DECREMENT
} from '../constants/actionTypes'


const incrementAction = (data = {}) => {
    return {
        type: INCREMENT,
        data
    }
};

const decrementAction = (data = {}) => {
    return {
        type: DECREMENT,
        data
    }
};

export const incrementActionChanged =(options = {}) => {
    return (dispatch, getState) => {
        dispatch(incrementAction(options));
    }
}

export const decrementActionChanged = (options = {}) => {
    return (dispatch, getState) => {
        dispatch(decrementAction(options));
    }
}
