import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducerTypes } from "../reducers";


export const useSelectorRepository:TypedUseSelectorHook<reducerTypes> = useSelector