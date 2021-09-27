

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return state;
    
    case 'CREATE_USER':
      return state;
    
    default:
      return state;
  }
}