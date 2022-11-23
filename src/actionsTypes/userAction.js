import { 
    ADD_USER,
    GET_USERS,
    DELETE_ITEM
 } from '../actionTypes/actionTypes'


 const addUser = () => {
    return {
      type: ADD_USER,
    };
  };
  
const getUsers = () => {
    return {
        type: GET_USERS,
      };
}

  
  export { addUser, getUsers };