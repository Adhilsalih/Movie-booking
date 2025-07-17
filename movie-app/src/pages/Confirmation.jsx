import React from "react";
import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();

  if (!state) return <p>No booking information available.</p>;

  const { name, email, seat, movie } = state;

  return (
    <div className="container text-center mt-5" >
  <h1 className="mb-4 text-success">🎉 Booking Confirmed!</h1>
  <div className="card mx-auto p-4" style={{ maxWidth: "400px" }}>
    <img
      src={movie.poster}
      className="card-img-top"
      alt={movie.title}
    />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text"><strong>Seat:</strong> {seat}</p>
      <p className="card-text"><strong>Name:</strong> {name}</p>
      <p className="card-text"><strong>Email:</strong> {email}</p>
    </div>
  </div>

  <Link to="/" className="btn btn-outline-dark mt-4">Back to Home</Link>
</div>

  );
};

export default Confirmation;
