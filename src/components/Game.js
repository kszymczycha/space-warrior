import React, { Component } from 'react'
import Background from './Background';
import SpaceshipAnimation from './SpaceshipAnimation';
import store from '../store';
import { Provider } from 'react-redux';

export default class Game extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <Background />
                    <SpaceshipAnimation />
                </>
            </Provider>
        )
    }
}
