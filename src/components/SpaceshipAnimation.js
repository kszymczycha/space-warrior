import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spaceship from './Spaceship';
import { 
    SPACESHIP_MOVE_UP, 
    SPACESHIP_MOVE_DOWN, 
    SPACESHIP_MOVE_RIGHT, 
    SPACESHIP_MOVE_LEFT 
} from '../actions';

class SpaceshipAnimation extends Component {

    constructor(props) {
        super(props);
        this.updateAnimationState = this.updateAnimationState.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKayDown.bind(this));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
        this.rAF = requestAnimationFrame(this.updateAnimationState); 
    }

    handleKayDown(e) {
        switch (e.keyCode) {
            case 38:
                this.props.moveUp();
                return;
            case 40:
                this.props.moveDown();
                return;
            case 39:
                this.props.moveRight();
                return;
            case 37:
                this.props.moveLeft();
                return;
            default:
                return;
        }
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


