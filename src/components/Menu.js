import React from 'react'
import { Link } from 'react-router-dom';
import '../scss/Menu.scss';

export default () => {
    return (
        <div className="menu">
            <h1>  
                <Link className="startGameBtn" to="/game">Start Game</Link>
            </h1>
        </div>
    )
}
