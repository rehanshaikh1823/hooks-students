import React,{useContext} from 'react';
import TextBox from './TextBox';
import ServerCall from './ServerCall';
import userAction from './userAction';
import {ctx} from './context';
const Register=()=>{
    const [dataObj,updateDataObj]=React.useState({});
    const [msg,updateMsg]=React.useState('');
    const ctxData=useContext(ctx);
    const fnPrepareData=(key,val)=>{
        let updatedObj=Object.assign({},dataObj,{[key]:val});
        updateDataObj(updatedObj);
    }
    const fnRegister=()=>{
         ServerCall.fnPostReq('student/std-reg',{data:dataObj})
         .then((res)=>{
            let _res=res.data;
            let _msg="Not inserted try again"
            if(_res.ok == 1 && _res.insertedCount == 1){
                userAction(ctxData.dispatch);
                _msg='Inserted Successfully';
            }
                updateMsg(_msg);
         })
         .catch((res)=>{
            updateMsg('Something went wrong');
         })
    }
    return <div>
       <TextBox lbl="Uid" type="text" k="uid" fnPrepareData={fnPrepareData} /> 
       <TextBox lbl="Password" type="password" k="pwd" fnPrepareData={fnPrepareData} /> 
       <TextBox lbl="Email" type="email" k="email" fnPrepareData={fnPrepareData} /> 
       <TextBox lbl="Phone" type="number" k="phone" fnPrepareData={fnPrepareData} /> 

       <input type='button' value="Register" onClick={fnRegister} />
       <h1>{msg}</h1>
    </div>
}

export default Register;