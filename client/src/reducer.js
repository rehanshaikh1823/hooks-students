const reducer= (state,action)=>{
    debugger;
      switch(action.type){
          case 'EDIT_INFO':
              state=Object.assign({},state,{editInfo:action.payload})
              break;
          case 'USERS':
              state=Object.assign({},state,{users:action.payload})
              break;
          
      }
      return state;
}

export default reducer;