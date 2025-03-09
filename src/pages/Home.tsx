import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import { Link } from "react-router-dom";

export function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);


  return (
    <div>
      <h1>Filmes Populares</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ textAlign: "center" }}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}
