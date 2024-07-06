import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayments: build.query({
      query: ({ token, page, limit, filterType }) => ({
        url: "/payments/get-all-payment",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit, filterType },
      }),
    }),
    getSinglePayment: build.query({
      query: ({ id, token }) => ({
        url: `/payments/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getMemeberFee: build.query({
      query: () => ({
        url: `/fees/get-fee`,
        method: "GET",
      }),
    }),
    myPayment: build.query({
      query: ({token}) => ({
        url: `/payments/get/single-payment`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getDiscountForPayment: build.query({
      query: () => ({
        url: `/discounts/get-discount`,
        method: "GET",
      }),
    }),
    getAllCouponPayment: build.query({
      query: ({ token, page, limit }) => ({
        url: `/coupons/get-coupon`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit },
      }),
    }),
    getAllUsersForDashboard: build.query({
      query: ({ token, page, limit }) => ({
        url: `/users/get/all/user`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit },
      }),
    }),
  }),
});

export const {
  useGetAllPaymentsQuery,
  useGetSinglePaymentQuery,
  useGetDiscountForPaymentQuery,
  useGetAllCouponPaymentQuery,
  useGetAllUsersForDashboardQuery,
  useMyPaymentQuery,
  useGetMemeberFeeQuery
} = paymentApi;
