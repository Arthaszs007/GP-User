import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const errorToastSlice = createSlice(
    {
        name:"errorToastSlice",
        initialState:{
            isActive:false,
            color:"alert-success",// alert-success, alert-info, alert-warning, alert-error
            content:""
        },reducers:{
            setErrorToast:(state,action:PayloadAction<any>)=>{
                const {isActive,color,content} = action.payload;
                state.content = content;
                state.color = color;
                state.isActive = isActive;
            }
        }
    }
)
export const {setErrorToast} = errorToastSlice.actions;
export default errorToastSlice.reducer;