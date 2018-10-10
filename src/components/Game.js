import React, { Component } from 'react'
import Background from './Background';
import Spaceship from './Spaceship';

export default class Game extends Component {
    render() {
        return (
            <>
                <Background />
                <Spaceship />
            </>
        )
    }
}
