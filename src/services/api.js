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
