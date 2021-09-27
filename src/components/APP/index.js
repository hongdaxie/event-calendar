import "./App.css";
import EventForm from "../EventForm";
import EventCalendar from "../EventCalendar";
import EventSearch from "../EventSearch";
import EventSearchResult from "../EventSearchResult";
import { useAppSelector } from "../../store";

function App() {
  const currentState = useAppSelector((state) => state.calendarEvent);
  const { searchResults } = currentState;

  return (
    <div className="app">
      <div className="leftSide">
        <EventSearch />
        {searchResults && searchResults.length > 0
          ? searchResults.map((searchResult) => (
              <EventSearchResult key={searchResult.id} {...searchResult} />
            ))
          : null}
        <EventForm />
      </div>
      <div className="mainSide">
        <EventCalendar />
      </div>
    </div>
  );
}

export default App;
