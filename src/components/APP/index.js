import "./App.css";
import EventForm from "../EventForm";
import EventCalendar from "../EventCalendar";

function App() {
  return (
    <div className="app">
      <div className="leftSide">
        <EventForm />
      </div>
      <div className="mainSide">
        <EventCalendar />
      </div>
    </div>
  );
}

export default App;
