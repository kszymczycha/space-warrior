import React, { Component } from 'react'
import spriteElement from '../spriteElement';
import img from '../resources/assets/spritesheets/sheet.png';

export default class Spaceship extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    
    startPosition(windowInnerWidth, windowInnetHeight, width, height) {
        const marginBottom = 10;
        const startX = (windowInnerWidth / 2) - (width / 2);
        const startY = windowInnetHeight - height - marginBottom;
        return { startX, startY }
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
                const { startX , startY } = this.startPosition(windowInnerWidth, windowInnetHeight, width, height);
                ctx.drawImage(imgSprite, x, y, width, height, startX, startY, width, height);
            });
        }
    }

    render() {
        return <canvas ref={this.canvasRef}/>
    }

}
