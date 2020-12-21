import "./App.css";
import EventsList from "./components/EventList";
import EventsInput from "./components/EventInput";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      <EventsInput />
      <EventsList />
    </div>
  );
}

export default App;
