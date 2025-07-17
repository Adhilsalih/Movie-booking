import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movie";

const Home = () => {
  return (
    <div style={{ padding: "2rem",backgroundColor:"grey" }}>
      <h1 style={{color:"white"}}>🎬 Now Showing</h1>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap",backgroundColor:"black" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "1.5rem",
              borderRadius: "10px",
              width: "200px",
              backgroundColor:"black",
              margin:"6px 6px"
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "6px",color:"white" }}
            />
            <h3 style={{color:"white"}}>{movie.title}</h3>
            <p style={{color:"white"}}>{movie.description}</p>
            <Link to={`/movie/${movie.id}`}>
              <button style={{ marginTop: "0.5rem" }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
