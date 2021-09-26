import React, { useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import LoadingButton from "@mui/lab/LoadingButton";
import moment from "moment";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  TextField,
  CardHeader,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { addCalendarEvent } from "../../store/slices/calendarEventSlice";
import "./EventForm.css";

const EventForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState(moment.utc().format());
  const currentState = useAppSelector((state) => state.calendarEvent);
  const { loading } = currentState;
  const dispatch = useAppDispatch();

  const handleEventTitleChange = (event) => {
    setEventTitle(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleEventStartTimeChange = (newValue) => {
    // format to YYYY-MM-DDThh:mm:ssZ
    setEventStartTime(newValue.utc().format());
  };

  const addNewCalendarEvent = () => {
    dispatch(
      addCalendarEvent({
        title: eventTitle,
        description: eventDescription,
        start: eventStartTime,
      })
    );
    setEventTitle("");
    setEventDescription("");
    setEventStartTime(moment.utc().format());
  };

  return (
    <div className="eventForm">
      <Card sx={{ minWidth: 275 }}>
        <CardHeader title="Add a new event" className="cardHeader"></CardHeader>
        <CardContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Title"
              value={eventTitle}
              onChange={handleEventTitleChange}
            />
            <TextField
              id="outlined-disabled"
              label="Description"
              value={eventDescription}
              onChange={handleEventDescriptionChange}
              rows={2}
              multiline
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                label="Event start time"
                value={eventStartTime}
                onChange={handleEventStartTimeChange}
                renderInput={(params) => <TextField {...params} />}
                ampm={false}
              />
            </LocalizationProvider>
          </Box>
        </CardContent>
        <CardActions className="cardBottom">
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={addNewCalendarEvent}
          >
            Add
          </LoadingButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default EventForm;
