import { createSlice } from "@reduxjs/toolkit";

type TUser = {
    userEmail: string;
    userId: string;
    userRole: string;
    iat: number;
    exp: number;
}

type TUserState = {
    user: null | TUser;
    token: null | string;
}

const initialState: TUserState = {
    user: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (stste, action) => {
            const {user, token} = action.payload;
            stste.user = user;
            stste.token = token;
        },
        userSignOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});


export const {setUser, userSignOut} = userSlice.actions;
export default userSlice.reducer;