import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signIn',
                method: 'POST',
                body: userInfo
            })
        }),
        signUp: builder.mutation({
            query: (userInfo) => ({
                url: '/users/create-user',
                method: 'POST',
                body: userInfo
            })
        })
    })
});


export const {useSignInMutation, useSignUpMutation} = userApi;