import axios from 'axios'

const recipesURL = 'http://localhost:3000/api/recipes';


export const getRecipes = () => axios.get(recipesURL);
export const getRecipe = (id) => axios.get(`${recipesURL}/${id}`);
export const createRecipes = (newRecipe) => axios.post(recipesURL, newRecipe);
export const updateRecipe = (id, updatedRecipe) =>
  axios.patch(`${recipesURL}/${id}`, updatedRecipe);