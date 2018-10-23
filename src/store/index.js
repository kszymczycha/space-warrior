import { createStore } from 'redux';
import { SET_START_POSITION_X, SET_START_POSITION_Y } from '../actions';

const initialState = {
    spaceshipX: 0,
    spaceshipY: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_POSITION_X:
            return {
                ...state,
                spaceshipX: action.payload
            }
        case SET_START_POSITION_Y:
            return {
                ...state,
                spaceshipY: action.payload
            }
        default:
            return state;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);