import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signIn',
                method: 'POST',
                body: userInfo
            })
        })
    })
});


export const {useSignInMutation} = userApi