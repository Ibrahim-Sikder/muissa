import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: ({ page, limit }) => ({
        url: "/blogs/get-blogs",
        method: "GET",

        params: { page, limit },
      }),
    }),
    getSingleBlog: build.query({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),

    updateBlog: build.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} = blogApi;