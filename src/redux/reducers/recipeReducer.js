

export const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      return action.payload;
    
    case 'CREATE_RECIPE':
      return state;
    
    default:
      return state;
  }
}