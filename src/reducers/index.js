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
   
      return {...state,userList:[...state.userList,{
        id:state.userList.length+1,
        name:action.payload.name,
        location:action.payload.location,
        age:action.payload.age,
        image:action.payload.image,
      }]}

      case 'DELETE_USER':
   
        
      return { ...state,userList:[...state.userList.filter((user) => user.id !== action.payload.id)]}
      case 'REMOVE_USER':
        return { ...state,user:[...state.user.filter((u)=>u.id!==action.payload.id)]}
    
    default:
      return state;
      
  }
}