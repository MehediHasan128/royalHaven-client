import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sellerReq: builder.mutation({
            query: (data) => ({
                url: "/request/sellerReq",
                method: "POST",
                body: data
            })
        }),

        getAllSellerReq: builder.query({
            query: () => ({
                url: "/request",
                method: "GET"
            })
        }),

        createSeller: builder.mutation({
            query: (sellerData) => ({
                url: "/users/create-seller",
                method: "POST",
                body: sellerData
            })
        })
    })
});


export const {useSellerReqMutation, useGetAllSellerReqQuery, useCreateSellerMutation} = sellerApi;