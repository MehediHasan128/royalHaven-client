import { baseApi } from "../../api/baseApi";

const buyerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBuyerInfo: builder.query({
            query: (uid) => ({
                url: `/buyer/${uid}`,
                method: 'GET'
            })
        })
    })
});


export const {useGetBuyerInfoQuery} = buyerApi;