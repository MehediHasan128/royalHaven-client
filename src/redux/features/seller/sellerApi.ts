import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sellerReq: builder.mutation({
            query: (data) => ({
                url: "/request/sellerReq",
                method: "POST",
                body: data
            })
        })
    })
});


export const {useSellerReqMutation} = sellerApi;