import React, { Component } from 'react'
import spriteElement from '../spriteElement';
import img from '../resources/assets/spritesheets/sheet.png';

export default class Spaceship extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imgSprite = new Image();
        canvas.style.marginTop = -window.innerHeight + 'px';
        canvas.style.display = 'block';
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        imgSprite.src = img;
        imgSprite.onload = () => {
            const element = spriteElement('playerShip2_blue');
            element.then(data => {
                const { x, y, width, height } = data.$;
                ctx.drawImage(imgSprite, x, y, width, height, 0, 0, width, height);
            });
        }
    }

    render() {
        return <canvas ref={this.canvasRef}/>
    }

}
