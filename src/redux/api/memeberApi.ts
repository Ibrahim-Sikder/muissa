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
      query: ({ token,member_type, id }) => ({
        url: `/members/get-member`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { member_type, id },
      }),
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useGetSingleMemberQuery,
  useGetMemberForPaymentQuery,
} = memeberApi;
