import { baseApi } from "./baseApi";

export const memeberApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMembers: build.query({
      query: ({ token, page, limit, filterType }) => ({
        url: "/members/get-all-member",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit, filterType },
      }),
    }),
    getSingleMember: build.query({
      query: ({ token, id }) => ({
        url: `/members/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getMemberForPayment: build.query({
      query: ({ token }) => ({
        url: `/members/get-member`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateMember: build.query({
      query: ({ token, id }) => ({
        url: `/members/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useGetSingleMemberQuery,
  useGetMemberForPaymentQuery,
  useUpdateMemberQuery,
} = memeberApi;
