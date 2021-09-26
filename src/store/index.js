import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import calendarEventReducer from "./slices/calendarEventSlice";

export const store = configureStore({
  reducer: {
    calendarEvent: calendarEventReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
