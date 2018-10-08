import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Route path="/" component={Home} exact />
                    <Route path="/game" component={Game} />
                </>
            </BrowserRouter>
        );
    }
}

export default App;
