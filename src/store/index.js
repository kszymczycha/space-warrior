import { createStore } from 'redux';
import {
    SET_START_POSITION_X,
    SET_START_POSITION_Y,
    SPACESHIP_MOVE_UP,
    SPACESHIP_MOVE_DOWN,
    SPACESHIP_MOVE_RIGHT,
    SPACESHIP_MOVE_LEFT
} from '../actions';

const SPEED = 10;

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
        case SPACESHIP_MOVE_UP:
            return {
                ...state,
                spaceshipY: state.spaceshipY -= SPEED
            }
        case SPACESHIP_MOVE_DOWN:
            return {
                ...state,
                spaceshipY: state.spaceshipY += SPEED
            }
        case SPACESHIP_MOVE_RIGHT:
            return {
                ...state,
                spaceshipX: state.spaceshipX += SPEED
            }
        case SPACESHIP_MOVE_LEFT:
            return {
                ...state,
                spaceshipX: state.spaceshipX -= SPEED
            }
        default:
            return state;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);