import React,{useState,useEffect,useContext} from 'react';
import TableComp from './TableComp';
import {ctx} from './context';
import userAction from './userAction';
import ServerCall from './ServerCall';
const Users=()=>{
    const headers=['ID','UID','PASSWORD','EMAIL','PHONE'];
    const keys=['_id','uid','pwd','email','phone'];
    const ctxData=useContext(ctx)
    const fnDelete=(user)=>{
        ServerCall.fnGetReq('student/delete-std?id='+user._id)
        .then((res)=>{
            if(res.data.ok ==1  && res.data.deletedCount == 1){
                alert('deleted successfully');
                userAction(ctxData.dispatch);
            }
        })
        .catch((res)=>{

        })
    }
    useEffect(()=>{
            userAction(ctxData.dispatch);
    },[])
    return <div>
        <TableComp fd={fnDelete} headers={headers} data={ctxData.state.users} keys={keys} />
    </div>
}

export default Users;