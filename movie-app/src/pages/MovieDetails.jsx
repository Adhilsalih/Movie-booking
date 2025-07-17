// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { movies } from "../data/movies";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === id);

//   if (!movie) return <p>Movie not found.</p>;

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>{movie.title}</h1>
//       <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
//         <img
//           src={movie.poster}
//           alt={movie.title}
//           style={{ width: "250px", borderRadius: "10px" }}
//         />
//         <div>
//           <h3>Description</h3>
//           <p>{movie.description}</p>

//           <Link to={`/booking/${movie.id}`}>
//             <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;


import React from "react";
import { useParams, Link } from "react-router-dom";

import { useMovie } from "../context/MovieContext";
import { movies } from "../data/movie";

const MovieDetails = () => {
  const { id } = useParams();
  const { setSelectedMovie } = useMovie();

  const movie = movies.find((m) => m.id === id);
  if (!movie) return <p>Movie not found.</p>;

  const handleBook = () => {
    setSelectedMovie(movie); // 👈 Save selected movie in context
  };

  return (
    <div style={{ padding: "2rem",backgroundColor:"grey" }}>
      <h1>{movie.title}</h1>
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "250px", borderRadius: "10px",backgroundColor:"black" }}
        />
        <div>
          <h3>Description</h3>
          <p>{movie.description}</p>

          <Link to={`/booking/${movie.id}`}>
            <button onClick={handleBook} style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
