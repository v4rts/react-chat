import React, {useState} from 'react';
import socket from "../socket";

let Start = () => {

    const [roomID, setRoomID] = useState('');
    const [userName, setUserName] = useState('');

    const onGo = () => {
        if (!roomID || !userName){
            alert("Required fields are missing")
        }
        console.log(roomID);
        console.log(userName);
    }

    return (
    <div className="wrapper">
        <input type="text" placeholder="Room" value={roomID} onChange={(e) => setRoomID(e.target.value)}/>
        <input type="text" placeholder="User" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={onGo}>Go</button>
    </div>
    );
}

export default Start;