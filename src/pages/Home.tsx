import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import { Link } from "react-router-dom";

export function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } else {
      const data = await getPopularMovies();
      setMovies(data);
    }
  }

  return (
    <div>
      <h1>Filmes Populares</h1>

      <input
        type="text"
        placeholder="Buscar filmes..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

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
