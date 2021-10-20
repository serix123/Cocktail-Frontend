import * as api from "../../api/recipeAPI";
import {
  GET_ALL_RECIPES,
  CREATE_RECIPE,
  UPDATE_RECIPE,
} from "../constants/recipesConstants";

// action creators

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    dispatch({ type: GET_ALL_RECIPES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipes = (newRecipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipes(newRecipe);
    dispatch({ type: CREATE_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = (id, updatedRecipe) => async (dispatch) => {
  try {
    console.log(id, updatedRecipe);
    const { data } = await api.updateRecipe(id, updatedRecipe);
    dispatch({ type: UPDATE_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
