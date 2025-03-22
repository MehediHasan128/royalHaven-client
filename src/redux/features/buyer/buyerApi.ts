import { baseApi } from "../../api/baseApi";

const buyerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBuyerInfo: builder.query({
            query: (uid) => ({
                url: `/buyer/${uid}`,
                method: 'GET'
            })
        }),
        updateBuyerInfo: builder.mutation({
            query: ([updeatedData, uid]) => ({
                url: `/buyer/addBuyerInfo/${uid}`,
                method: 'PATCH',
                body: updeatedData
            })
        }),
        uploadUserProfilePicture: builder.mutation({
            query: ([imageFile, uid]) => ({
                url: `/users/uploadImage/${uid}`,
                method: "POST",
                body: imageFile
            })
        })
    })
});


export const {useGetBuyerInfoQuery, useUpdateBuyerInfoMutation, useUploadUserProfilePictureMutation} = buyerApi;