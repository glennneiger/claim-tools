import React from 'react';
import clipBoard from '../clipboard.svg';

function ClipIcon (props) {
    function copyField(){// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp 04/02/19
        var copyText = document.getElementById(props.fieldId);
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    };

    return (
        <img id='clip-board-icon' onClick={copyField} src={clipBoard} alt='clipboard icon'></img>
    )
}

export default ClipIcon;