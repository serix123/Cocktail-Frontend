import { combineReducers } from 'redux';
import {recipeReducer} from './recipeReducer'
import {userReducer} from './userReducer'

export default combineReducers({
  recipe: recipeReducer,
  user: userReducer,
})