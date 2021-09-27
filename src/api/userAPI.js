import axios from 'axios'

const userURL = 'http://localhost:3000/api/users';

export const getUsers = () => axios.get(userURL);