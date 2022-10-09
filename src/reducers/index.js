import {data} from '../data'

const INITIAL_STATE = {
  userList:data,
  user:[]
}
export const reducer =(state=INITIAL_STATE,action) => {
  switch (action.type) {
    case 'ADD_USER':
     if ((state.user.filter(c => c.id === action.payload.id)==false)){
     
      return { ...state,user:[...state.user, action.payload] }
      
    }else {

      return state
      
     }
     case 'CREATE_USER':
      console.log(action.payload);
      return {...state,userList:[...state.userList,{
        id:state.userList.length+1,
        name:action.payload.name,
        location:action.payload.location,
        age:action.payload.age,
        image:action.payload.image,
      }]}
     
    
    default:
      return state;
      
  }
}