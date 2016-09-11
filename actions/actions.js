import {
	INCREMENT,
    DECREMENT
} from '../constants/actionTypes'

const decrementAction = (data = {}) => {
    return {
        type: DECREMENT,
        data
    }
};

export const decrementActionChanged = (options = {}) => {
    return (dispatch, getState) => {
        dispatch(decrementAction(options));
    }
}
