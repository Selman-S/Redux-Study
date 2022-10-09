
const ADD = 'ADD_USER'
const CREATE = 'CREATE_USER'
const DELETE = 'DELETE_USER'
const REMOVE = 'REMOVE_USER'


export const addUser = user => {
  return { type:ADD,payload:user}
};
export const createUser = user => {
  return { type:CREATE,payload:user}
};
export const deleteUser = user => {
  return { type:DELETE,payload:user}
};

export const remove = user => {
  return { type:REMOVE,payload:user}
};
