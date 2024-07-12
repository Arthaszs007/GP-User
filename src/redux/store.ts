import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook ,useSelector} from "react-redux";
import errorToast_slice from "./feathers/errorToast_slice";

export const store = configureStore({
    reducer:{
        errorToast_slice
    }
})

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<Rootstate> =useSelector;