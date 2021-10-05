import {
  GET_ALL_RECIPES,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  GET_RECIPE
} from '../constants/recipesConstants'; 


export const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return action.payload;
    
    case CREATE_RECIPE:
      return [...state,action.payload];
      
    case UPDATE_RECIPE:
      return state;

    case DELETE_RECIPE:
      return state;

    case GET_RECIPE:
      return state;
    
    default:
      return state;
  }
}