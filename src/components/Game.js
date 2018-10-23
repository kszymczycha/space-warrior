import React, { Component } from 'react'
import Background from './Background';
import Spaceship from './Spaceship';
import store from '../store';
import { Provider } from 'react-redux';

export default class Game extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <Background />
                    <Spaceship />
                </>
            </Provider>
        )
    }
}
