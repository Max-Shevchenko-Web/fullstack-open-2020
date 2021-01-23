import userServices from '../services/users'

const usersReducer =(state = null, action) => {
  switch(action.type) {
    case 'INIT_USERS':
      return action.data
    default:
      return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userServices.getAll().then(res => res)
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

export default usersReducer