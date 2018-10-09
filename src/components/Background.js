import React, { Component } from 'react'

export default class Background extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.style.background = '#000000';
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    render() {
        return (
            <canvas ref={this.canvasRef}/>
        )
    }

}
