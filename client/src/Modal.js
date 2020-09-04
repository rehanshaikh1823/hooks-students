import React,{useContext,useState} from 'react';
import {ctx} from './context';
import TextBox from './TextBox';
import ServerCall from './ServerCall';
import userAction from './userAction';
const Modal=({closeModal})=>{
    const ctxData=useContext(ctx);
    const editData=ctxData.state.editInfo;
    const {id,uid,pwd,email,phone}=editData;
    const [userInfo,updateUserInfo]=useState(editData)
    const fnUpdate=()=>{
        ServerCall.fnPostReq('student/update-std',userInfo)
        .then((res)=>{
            if(res.data.ok == 1 && res.data.n == 1){
                closeModal();
                userAction(ctxData.dispatch);
            }
        })
        .catch(()=>{
            
        })
    }
    const fnPrepareData=(key,val)=>{
        updateUserInfo(Object.assign({},userInfo,{[key]:val}))
          
    }
    return <div id="mask">
        <div>
        <TextBox lbl="Uid" type="text" val={uid} k="uid" fnPrepareData={fnPrepareData} /> 
        <TextBox lbl="Password" type="password" val={pwd} k="pwd" fnPrepareData={fnPrepareData} /> 
        <TextBox lbl="Email" type="email" val={email} k="email" fnPrepareData={fnPrepareData} /> 
        <TextBox lbl="Phone" type="number" val={phone} k="phone" fnPrepareData={fnPrepareData} /> 

       <input type='button' value="Update" onClick={fnUpdate} />

            <span onClick={closeModal}>X</span>
        </div>
    </div>
}

export default Modal;