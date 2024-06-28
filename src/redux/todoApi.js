import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  tagTypes: ['todos'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://667d0cc0297972455f633f0e.mockapi.io/',
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => 'todos',
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation({
      query: body => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['todos'],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),
    toggleTodo: builder.mutation({
      query: todo => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: {
          ...todo,
          completed: !todo.completed,
        },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoMutation } = todoApi;
