import * as api from '../../api/recipeAPI';

// action creators
export const getPosts = () => async (dispatch) => {
  
  try {
    const { data } = await api.getRecipes();
    dispatch({ type: 'GET_RECIPES', payload: data });
  } catch (error) {
    console.log(error.message)
  }
}