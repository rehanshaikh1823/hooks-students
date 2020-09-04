import React,{useReducer} from 'react';
import Register from './Register';
import Users from './Users';
import {initVal} from './initVal';
import reducer from './reducer';
import {ctx} from './context';
const App=()=>{
    const [state,dispatch]=useReducer(reducer,initVal);
    return <div>
        <ctx.Provider value={{state,dispatch}}>
           <Register />
           <Users /> 
        </ctx.Provider>
       
    </div>
}

export default App;