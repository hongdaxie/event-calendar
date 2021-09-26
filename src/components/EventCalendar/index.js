import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteCalendarEvent } from "../../store/slices/calendarEventSlice";
import EventTooltip from "../EventTooltip";
import DeleteDialog from "../DeleteDialog";

const EventCalendar = () => {
  const currentState = useAppSelector((state) => state.calendarEvent);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { events } = currentState;
  const dispatch = useAppDispatch();

  const renderEventContent = (eventInfo) => {
    return (
      <EventTooltip
        eventDescription={eventInfo.event.extendedProps.description}
      >
        <div>
          <b>{eventInfo.timeText}</b>
          &nbsp;
          <i>{eventInfo.event.title}</i>
        </div>
      </EventTooltip>
    );
  };

  const handleEventClick = (eventInfo) => {
    dispatch(deleteCalendarEvent(eventInfo.event.id));
    setSelectedEvent();
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable
        selectable
        selectMirror
        dayMaxEvents
        events={events}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
      {selectedEvent ? <DeleteDialog /> : null}
    </>
  );
};

export default EventCalendar;
