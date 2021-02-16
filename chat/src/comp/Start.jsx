import React from 'react';
import socket from "../socket";

let Start = () => {
    return (
    <div className="wrapper">
        <input type="text" placeholder="Room" value=""/>
        <input type="text" placeholder="User" value=""/>
        <button>Go</button>
    </div>
    );
}

export default Start;