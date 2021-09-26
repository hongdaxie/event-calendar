import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import calendarService from "../../services/calendarServices";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  loading: false,
  events: [],
  error: null,
};

export const addCalendarEvent = createAsyncThunk(
  "calendarEvents/add",
  async (newCalendarEvent, { rejectWithValue }) => {
    try {
      // make a fake request
      await calendarService();
      return { id: uuidv4(), ...newCalendarEvent };
    } catch (err) {
      return rejectWithValue({
        message: err.message,
      });
    }
  }
);

export const deleteCalendarEvent = createAsyncThunk(
  "calendarEvents/delete",
  async (calendarEventId, { rejectWithValue }) => {
    try {
      // make a fake request
      await calendarService();
      return { calendarEventId };
    } catch (err) {
      return rejectWithValue({
        message: err.message,
      });
    }
  }
);

export const calendarEventSlice = createSlice({
  name: "calendarEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCalendarEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCalendarEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.events = [...state.events, action.payload];
      state.error = null;
    });
    builder.addCase(addCalendarEvent.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = { code: 500, message: "unknown error" };
      }
    });

    builder.addCase(deleteCalendarEvent.pending, (state) => {
      state.error = null;
    });
    builder.addCase(deleteCalendarEvent.fulfilled, (state, action) => {
      console.log(action.payload);
      state.events = state.events.filter(
        (event) => event.id !== action.payload.calendarEventId
      );
      state.error = null;
    });
    builder.addCase(deleteCalendarEvent.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = { code: 500, message: "unknown error" };
      }
    });
  },
});

export default calendarEventSlice.reducer;
