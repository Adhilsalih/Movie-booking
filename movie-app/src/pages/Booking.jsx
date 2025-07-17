import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieContext";

const Booking = () => {
  const { selectedMovie } = useMovie();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedSeat || !name || !email) {
      alert("Please complete all fields.");
      return;
    }

    navigate("/confirmation", {
      state: {
        name,
        email,
        seat: selectedSeat,
        movie: selectedMovie,
      },
    });
  };

  if (!selectedMovie) return <p>No movie selected.</p>;

  const seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"];

  return (
    <div className="container mt-5" style={{backgroundColor:"grey"}}>
  <h1 className="mb-4" >Book Tickets for {selectedMovie.title}</h1>

  <h4>Select Seat:</h4>
  <div className="d-flex flex-wrap gap-2 mb-4">
    {seats.map((seat) => (
      <button
        key={seat}
        onClick={() => setSelectedSeat(seat)}
        className={`btn ${selectedSeat === seat ? "btn-danger" : "btn-outline-success"}`}
      >
        {seat}
      </button>
    ))}
  </div>

  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <button type="submit" className="btn btn-primary mt-3">Confirm Booking</button>
  </form>
</div>

  );
};

export default Booking;
