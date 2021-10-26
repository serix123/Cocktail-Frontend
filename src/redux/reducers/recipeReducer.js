import {
  GET_ALL_RECIPES,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  GET_RECIPE
} from '../constants/recipesConstants'; 


export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return action.payload;
    // fix state
    case CREATE_RECIPE:
      return [...recipes, action.payload];
      
    case UPDATE_RECIPE:
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );

    case DELETE_RECIPE:
      return recipes;

    case GET_RECIPE:
      return action.payload;
    
    default:
      return recipes;
  }
}