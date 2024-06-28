import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: ({ page, limit }) => ({
        url: "/blogs/get-blogs",
        method: "GET",

        params: { page, limit },
      }),

      providesTags: ["blogs"],
    }),
    getSingleBlog: build.query({
      query: ({id}) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags:['blogs'],
    }),

    updateBlog: build.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),

    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
