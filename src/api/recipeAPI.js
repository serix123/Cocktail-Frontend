import axios from 'axios'

const recipesURL = 'http://localhost:3000/api/recipes';

export const getRecipes = () => axios.get(recipesURL);
export const createRecipes = (newRecipe) =>
  axios.post("http://localhost:3000/api/recipes/create", newRecipe);