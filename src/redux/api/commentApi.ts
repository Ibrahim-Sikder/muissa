import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createComment: build.mutation({
      query: ({ token, body, id }) => ({
        url: `/comments/create-comment?id=${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body, 
      }),
    }),
  }),
});

export const { useCreateCommentMutation } = commentApi;
