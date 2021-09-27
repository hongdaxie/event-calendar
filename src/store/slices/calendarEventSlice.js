import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import calendarService from "../../services/calendarServices";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  loadingAdd: false,
  loadingDelete: false,
  events: [
    {
      id: "16aa3c51-429c-4f70-b18e-cad7719245d2",
      title: "1324",
      description: "qdsdas",
      start: "2021-09-27T13:09:57Z",
    },
    {
      id: "5846c333-e44f-49fa-ae99-14e836482229",
      title: "1234",
      description: "sdxcxz",
      start: "2021-09-27T13:10:13Z",
    },
    {
      id: "4820adbb-84d5-4dc4-bd9b-4aa2055f7394",
      title: "11345",
      description: "adqweqw",
      start: "2021-09-27T15:14:04Z",
    },
  ],
  error: null,
  searchResults: [],
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

export const searchCalendarEvent = createAsyncThunk(
  "calendarEvents/search",
  async (searchStr, { getState, rejectWithValue }) => {
    try {
      // make a fake request
      await calendarService();
      const allEvents = getState().calendarEvent.events;
      const result = allEvents.filter(
        (event) =>
          (event.title && event.title.includes(searchStr)) ||
          (event.description && event.description.includes(searchStr))
      );
      return { result };
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
      state.loadingAdd = true;
      state.error = null;
    });
    builder.addCase(addCalendarEvent.fulfilled, (state, action) => {
      state.loadingAdd = false;
      state.events = [...state.events, action.payload];
      state.error = null;
    });
    builder.addCase(addCalendarEvent.rejected, (state, action) => {
      state.loadingAdd = false;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = { code: 500, message: "unknown error" };
      }
    });

    builder.addCase(deleteCalendarEvent.pending, (state) => {
      state.loadingDelete = true;
      state.error = null;
    });
    builder.addCase(deleteCalendarEvent.fulfilled, (state, action) => {
      state.loadingDelete = false;
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

    builder.addCase(searchCalendarEvent.pending, (state) => {
      state.error = null;
    });
    builder.addCase(searchCalendarEvent.fulfilled, (state, action) => {
      if (action.payload.result.length > 0) {
        state.searchResults = [...action.payload.result];
      } else {
        state.searchResults = [];
      }
    });
    builder.addCase(searchCalendarEvent.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = { code: 500, message: "unknown error" };
      }
    });
  },
});

export default calendarEventSlice.reducer;
