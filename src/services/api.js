import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export const getPosts = async options => {
  const { data } = await axios.get(`/posts`, {
    params: {
      limit: 6,
      ...options,
    },
  });
  return data;
};

export const getPostsByQuery = async options => {
  const { data } = await axios.get('/posts/search', {
    params: {
      limit: 6,
      ...options,
    },
  });
  return data;
};

export const fetchUsers = async () => {
  const { data } = await axios.get('/users');
  return data.users;
};

export const fetchUsersById = async id => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};
export const fetchPostsByUserId = async id => {
  const { data } = await axios.get(`posts/user/${id}`);
  return data.posts;
};

export const fetchPostById = async id => {
  const { data } = await axios.get(`posts/${id}`);
  return data;
};

export const fetchRecipes = async () => {
  const { data } = await axios.get('/recipes');
  return data.recipes;
};
export const fetchRecipesByQuery = async query => {
  const { data } = await axios.get(`/recipes/search?q=${query}`);
  return data.recipes;
};
export const fetchRecipeById = async id => {
  const { data } = await axios.get(`/recipes/${id}`);
  return data;
};
