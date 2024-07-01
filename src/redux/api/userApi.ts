import { baseApi } from "./baseApi";


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllUser: build.query({
      query: ({token}) => ({
        url: "/users/get/all/user",
        method: "GET",
        headers: {
          Authorization :`Bearer ${token}`
        }
      }),
    }),
    getSingleUser: build.query({
      query: ({token}) => ({
        url: "/users/single-user",
        method: "GET",
        headers: {
          Authorization :`Bearer ${token}`
        }
      }),
    }),
    getMe: build.query({
      query: ({token}) => ({
        url: "/users/me/verify",
        method: "GET",
        headers: {
          Authorization :`Bearer ${token}`
        }
      }),
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

  }),

});

export const { useGetAllUserQuery, useDeleteUserMutation ,useGetSingleUserQuery, useGetMeQuery} = userApi;
