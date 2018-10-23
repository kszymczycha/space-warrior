import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SET_START_POSITION_X, SET_START_POSITION_Y } from '../actions';
import spriteElement from '../spriteElement';
import img from '../resources/assets/spritesheets/sheet.png';

class Spaceship extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    
    startPosition(windowInnerWidth, windowInnetHeight, width, height) {
        const marginBottom = 10;
        const startX = (windowInnerWidth / 2) - (width / 2);
        const startY = windowInnetHeight - height - marginBottom;
        this.props.setStartPositionX(startX);
        this.props.setStartPositionY(startY);
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imgSprite = new Image();
        const windowInnerWidth = window.innerWidth;
        const windowInnetHeight = window.innerHeight;
        canvas.style.marginTop = -window.innerHeight + 'px';
        canvas.style.display = 'block';
        ctx.canvas.width = windowInnerWidth;
        ctx.canvas.height = windowInnetHeight;
        imgSprite.src = img;
        imgSprite.onload = () => {
            const element = spriteElement('playerShip2_blue');
            element.then(data => {
                const { x, y, width, height} = data.$;
                this.startPosition(windowInnerWidth, windowInnetHeight, width, height);
                ctx.drawImage(imgSprite, x, y, width, height, this.props.spaceshipX, this.props.spaceshipY, width, height);
            });
        }
    }

    render() {
        return <canvas ref={this.canvasRef}/>
    }

}

const mapStateToProps = (state) => {
    return {
        spaceshipX: state.spaceshipX,
        spaceshipY: state.spaceshipY
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartPositionX: (x) => {
            dispatch({
                type: SET_START_POSITION_X,
                payload: x
            });
        },
        setStartPositionY: (y) => {
            dispatch({
                type: SET_START_POSITION_Y,
                payload: y
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spaceship); 
