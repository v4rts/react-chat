import React, {useState} from 'react';
import socket from "../socket";
import axios from 'axios';
import styles from "./styles/Start.module.css";

let Start = ({onLogin}) => {

    const [roomID, setRoomID] = useState('');
    const [userName, setUserName] = useState('');

    const onGo = () => {
        if (!roomID || !userName){
            return alert("Required fields are missing");
        }
        axios.post('/rooms', {roomID, userName}).then(()=>{
            onLogin();
        })
    }

    return (
    <div className={styles.wrapper}>
        <div className={styles.figure} id={styles.box1}></div>
        <div className={styles.figure} id={styles.box2}></div>
        <div className={styles.figure} id={styles.box3}></div>
        <h1><sub>R </sub><sup>o</sup><sup>o </sup><sub>m</sub><sup>s</sup></h1>
        <div className={styles.login__form}>
            <input className={styles.input} type="text" placeholder="Room" value={roomID} onChange={(e) => setRoomID(e.target.value)}/>
            <input className={styles.input} type="text" placeholder="User" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <button className={styles.button} onClick={onGo}>Login</button>
        </div>
    </div>
    );
}

export default Start;