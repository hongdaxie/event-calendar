import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EventForm from '../EventForm';

function App() {
  return (
    <div className="app">
      <div className="leftSide">
        <EventForm />
      </div>
      <div className="mainSide">
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </div>
      
    </div>
  );
}

export default App;
