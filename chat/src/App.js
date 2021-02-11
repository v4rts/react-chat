import io from "socket.io-client";
import React from 'react';

const socket = io('http://localhost:8888')

function App() {
  return (
    <div className="App">
        <h1>Ku</h1>
    </div>
  );
}

export default App;
