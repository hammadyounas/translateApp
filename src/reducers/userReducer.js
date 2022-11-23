import {
  ADD_USER,
  ADD_USER_SUCCESSFULL,
  ADD_USER_FAIL,
  GET_USERS,
  GET_USERS_SUCCESSFULL,
  GET_USERS_FAIL,
  DELETE_ITEM,
} from '../actionsTypes/actionTypes'

const initialState = {
  users: {
    loading: false,
    data: {},
    error: {},
  },
  addUser: {
    loading: false,
    data: {},
    error: {},
  },
  updateUser: {
    loading: false,
    data: {},
    error: {},
  },
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: {
          loading: true,
          data: {},
          error: {},
        },
      }
    case GET_USERS_SUCCESSFULL:
      return {
        ...state,
        users: {
          loading: true,
          data: action.data,
          error: {},
        },
      }
    case GET_USERS_FAIL:
      return {
        ...state,
        users: {
          loading: true,
          data: {},
          error: action.data,
        },
      }
    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      }
    default:
      return state
  }
}

export default userReducer;
