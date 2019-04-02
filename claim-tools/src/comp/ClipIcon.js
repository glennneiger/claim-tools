import React from 'react';
import clipBoard from '../clipboard.svg';

function ClipIcon (props) {

    return (
        <div>
            <button onclick=""><img id='clip-board-icon' src={clipBoard} alt='clipboard icon'></img></button>
        </div>
    )
}

export default ClipIcon;