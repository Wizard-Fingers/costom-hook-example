// import './App.css';
import { useState } from "react";
import TripList from "./components/TripList";

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTrips(false)}>hide trips</button>
      <br/>
      <button onClick={() => setShowTrips(true)}>show trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
