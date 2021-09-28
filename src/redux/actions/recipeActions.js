import * as api from '../../api/recipeAPI';
import {
  GET_ALL_RECIPES
} from '../constants/recipesConstants';

// action creators

export const getRecipes = () => async (dispatch) => {
  
  try {
    const { data } = await api.getRecipes();
    dispatch({type : GET_ALL_RECIPES, payload : {data}})
  } catch (error) {
    console.log(error.message);
  }
}

