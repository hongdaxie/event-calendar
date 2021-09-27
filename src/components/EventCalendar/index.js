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
  const { events, loadingDelete } = currentState;
  const dispatch = useAppDispatch();

  const renderEventContent = (eventInfo) => {
    return (
      <EventTooltip
        eventName={eventInfo.event.title}
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
    setSelectedEvent({
      eventId: eventInfo.event.id,
      eventName: eventInfo.event.title,
      eventDescription: eventInfo.event.extendedProps.description,
      eventTime: eventInfo.event.startStr,
    });
  };

  const handleCancelDelete = () => {
    setSelectedEvent(null);
  };

  const handleConfirmDelete = (eventId) => {
    dispatch(deleteCalendarEvent(eventId)).then(() => setSelectedEvent(null));
  };

  return (
    <>
      <div>
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
      </div>
      <div>
        {selectedEvent ? (
          <DeleteDialog
            confirmLoading={loadingDelete}
            handleCancelDelete={handleCancelDelete}
            handleConfirmDelete={handleConfirmDelete}
            {...selectedEvent}
          />
        ) : null}
      </div>
    </>
  );
};

export default EventCalendar;
