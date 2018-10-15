import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import '../scss/Menu.scss';

export default () => {
    return (
        <div className="menu">
            <Header />
            <h2>  
                <Link className="startGameBtn" to="/game">Start Game</Link>
            </h2>
        </div>
    )
}
