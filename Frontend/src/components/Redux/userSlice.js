import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Stephen Curry",
        age: "20",
        about: "I'm a software engineer",
        avtUrl: "https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png"
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name,
            state.age = action.payload.age,
            state.about = action.payload.about,
            state.avtUrl = action.payload.avtUrl
        }
    },
});

export const {update} = userSlice.actions;
export default userSlice.reducer;