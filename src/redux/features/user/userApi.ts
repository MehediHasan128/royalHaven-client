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
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET'
            })
        }),
        updateUserStatus: builder.mutation({
            query: ([updatedData, uid]) => ({
                url: `users/updateStatus/${uid}`,
                method: 'PATCH',
                body: updatedData
            })
        })
    })
});


export const {useSignInMutation, useSignUpMutation, useGetAllUsersQuery, useUpdateUserStatusMutation} = userApi;