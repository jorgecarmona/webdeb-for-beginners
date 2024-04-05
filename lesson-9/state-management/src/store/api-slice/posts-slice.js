import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postsService = createApi({
  reducerPath: "postsService",
  baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts"
    }),
    getPostsById: builder.query({
      // https://jsonplaceholder.typicode.com/posts/3
      query: (id) => `/posts/${id}`
    }),
    getPostComments: builder.query({
      query: (id) => `/comments?postId=${id}`
    })
  })
});

export const {useGetPostsQuery, useGetPostsByIdQuery, useGetPostCommentsQuery} = postsService;
