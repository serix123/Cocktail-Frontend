

export const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_RECIPES':
      return state;
    
    case 'CREATE_RECIPE':
      return state;
    
    default:
      return state;
  }
}