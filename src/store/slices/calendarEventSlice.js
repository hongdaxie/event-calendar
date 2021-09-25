import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    events: [],
};

export const addCalendarEvent = createAsyncThunk('calendarEvents', async () => {
    
})

export const calendarEventSlice = createSlice({
    name: 'calendarEvent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    }
});



export default calendarEventSlice.reducer;
