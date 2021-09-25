import React, { useState } from 'react';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, Button, Card, CardContent, CardActions, TextField, CardHeader } from '@mui/material';
import './EventForm.css';


const EventForm = () => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTime, setEventTime] = useState(new Date());

    const handleEventTitleChange = (event) => {
        setEventTitle(event.target.value);
    }

    const handleEventDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    }

    const handleEventTimeChange = (newValue) => {
        console.log(newValue);
        setEventTime(newValue);
    }

    const handleAddEvent = () => {

    }

    return (
        <div className="eventForm">
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    title="Add a new event"
                    className="cardHeader"
                >
                </CardHeader>
                <CardContent>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
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
                            label="Event time"
                            value={eventTime}
                            onChange={handleEventTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                            ampm={false}
                        />
                    </LocalizationProvider>
                    </Box>
                </CardContent>
                <CardActions className="cardBottom">
                    <Button variant="contained" onClick={handleAddEvent}>
                        Add
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default EventForm;
