import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const userInfoSlice = createSlice(
    {
        name:"userInfo",
        initialState:{
            username:""
        },reducers:{
            setUsername:(state,action:PayloadAction<any>)=>{
                const {username}= action.payload;
                state.username = username;
            }
        }
    }
)

export const{setUsername} = userInfoSlice.actions;
export default userInfoSlice.reducer;