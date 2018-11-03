import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spaceship from './Spaceship';
import { 
    SPACESHIP_MOVE_UP, 
    SPACESHIP_MOVE_DOWN, 
    SPACESHIP_MOVE_RIGHT, 
    SPACESHIP_MOVE_LEFT 
} from '../actions';

const KEY = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
}

class SpaceshipAnimation extends Component {

    constructor(props) {
        super(props);
        this.updateAnimationState = this.updateAnimationState.bind(this);
        this.keys = [];
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
        this.rAF = requestAnimationFrame(this.updateAnimationState); 
    }

    handleKeyDown(e) {
        this.keys[e.keyCode] = true;

        if (this.keys[KEY.UP]) {
            this.props.moveUp();
        }

        if (this.keys[KEY.DOWN]) {
            this.props.moveDown();
        }

        if (this.keys[KEY.RIGHT]) {
            this.props.moveRight();
        }

        if (this.keys[KEY.LEFT]) {
            this.props.moveLeft();
        }
    }

    handleKeyUp(e) {
        this.keys[e.keyCode] = false;
    }

    render() {
        return <Spaceship />
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        moveUp: () => {
            dispatch({
                type: SPACESHIP_MOVE_UP
            })
        },
        moveDown: () => {
            dispatch({
                type: SPACESHIP_MOVE_DOWN
            })
        },
        moveRight: () => {
            dispatch({
                type: SPACESHIP_MOVE_RIGHT
            })
        },
        moveLeft: () => {
            dispatch({
                type: SPACESHIP_MOVE_LEFT
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(SpaceshipAnimation);


