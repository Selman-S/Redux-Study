
const ADD = 'ADD_USER'
const CREATE = 'CREATE_USER'
const DELETE = 'DELETE_USER'


export const addUser = user => {
  return { type:ADD,payload:user}
};
export const createUser = user => {
  return { type:CREATE,payload:user}
};
export const addCart = user => {
  return { type:ADD,payload:user}
};
