import React from 'react';

const TextBox=({lbl,type,k,val,fnPrepareData})=>{
    const fnChange=(e)=>{
        debugger;
        let targetEle=e.target;
        let val=targetEle.value;
        let key=targetEle.id;
        fnPrepareData(key,val);
    }
    return <p>
       <b>{lbl}:</b>  <input defaultValue={val} type={type} id={k} onChange={fnChange} />
    </p>
}

export default TextBox;