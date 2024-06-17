import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

// export const getPosts = async (skip, limit, per_page) => {
//   const { data } = await axios.get(
//     `/posts?limit=${limit}&skip=${skip}&api_key=sadfasdh3244h3213agsdff&per_page=${per_page}`
//   );
//   return data;
// };
export const getPosts = async options => {
  const { data } = await axios.get(`/posts`, {
    params: {
      limit: 6,
      ...options,
    },
  });
  return data;
};
