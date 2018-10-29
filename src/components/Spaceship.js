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
    componentDidUpdate() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(this.imgSprite, this.x, this.y, this.width, this.height, this.props.spaceshipX, this.props.spaceshipY, this.width, this.height);
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.ctx = canvas.getContext('2d');
        this.imgSprite = new Image();
        canvas.style.marginTop = -window.innerHeight + 'px';
        canvas.style.display = 'block';
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.imgSprite.src = img;
        this.imgSprite.onload = () => {
            const element = spriteElement('playerShip2_blue');
            element.then(data => {
                const { x, y, width, height} = data.$;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.startPosition(this.ctx.canvas.width, this.ctx.canvas.height, width, height);
                this.ctx.drawImage(this.imgSprite, this.x, this.y, this.width, this.height, this.props.spaceshipX, this.props.spaceshipY, this.width, this.height);
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
