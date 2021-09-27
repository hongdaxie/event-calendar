import "./App.css";
import EventForm from "../EventForm";
import EventCalendar from "../EventCalendar";
import EventSearch from "../EventSearch";

function App() {
  return (
    <div className="app">
      <div className="leftSide">
        <EventSearch />
        <EventForm />
      </div>
      <div className="mainSide">
        <EventCalendar />
      </div>
    </div>
  );
}

export default App;
