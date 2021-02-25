import socket from "./socket";
import React from 'react';
import Start from "./comp/Start";
import reducer from "./reducer";

let App = () => {

  const  [state, dispatch]  = React.useReducer(reducer, {
      isAuth: false,
  });

  const onLogin = () => {
      dispatch({
          type: 'IS_AUTH', payload: true
      });
  }

  console.log(state);

  return ( /* get login form if not authenticated */
    <div>
        {!state.isAuth && <Start onLogin={onLogin}/>}
    </div>
  );
}

export default App;
