import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://667d0cc0297972455f633f0e.mockapi.io/',
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
