import ServerCall from './ServerCall';
const userAction=(dispatch)=>{
    ServerCall.fnGetReq('student/get-std')
    .then((res)=>{
        dispatch({
            type:'USERS',
            payload:res.data
        })
    })
    .catch(()=>{
        dispatch({
            type:'USERS',
            payload:[]
        })
    })
}
export default userAction;