import * as api from "../../api/recipeAPI";
import { GET_ALL_RECIPES, CREATE_RECIPE } from "../constants/recipesConstants";

// action creators

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    console.log(data);
    dispatch({ type: GET_ALL_RECIPES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipes = (newRecipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipes(newRecipe);
    console.log(data);
    dispatch({ type: CREATE_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
