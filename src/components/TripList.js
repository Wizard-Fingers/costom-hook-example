import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// styles
import "./TripList.css";
import "../../src/index.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
