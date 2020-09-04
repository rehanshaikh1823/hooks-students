import React,{useContext,useState} from 'react';
import {ctx} from './context';
import Modal from './Modal';
const TableComp=({headers,keys,data,fd})=>{
    const ctxData=useContext(ctx);
    const [showModal,updateShowModal]=useState(false);
    const fnEdit=(data)=>{
        ctxData.dispatch({
            type:'EDIT_INFO',
            payload:data
        })
        updateShowModal(true);
    }
    const closeModal=()=>{
        updateShowModal(false);
    }
    const fnDelete=(obj)=>{
        let isOk=confirm('r u sure');
        if(isOk){
             fd(obj);
        }
    }
    return <React.Fragment>
        <table border='1px'>
            <tbody>
            <tr>
                 {
                     headers.map((h,i)=>{
                        return <th key={i+'h'}>{h}</th>
                     })
                 }
                 <th>Edit</th>
                 <th>Delete</th>
            </tr>
                {
                    data.map((obj,i)=>{
                        return <tr key={i+'r'}>
                            {
                                keys.map((k,i)=>{
                                    return <td key={i+'d'}>{obj[k]}</td>
                                })
                            }
                            <td><input type='button' value='edit' onClick={()=>fnEdit(obj)} /></td>
                            <td><input type='button' value='delete' onClick={()=>fnDelete(obj)} /></td>
                            
                        </tr>
                    })
                }
                </tbody>
        </table>
       {showModal && <Modal closeModal={closeModal} />} 
    </React.Fragment>
}

export default TableComp;