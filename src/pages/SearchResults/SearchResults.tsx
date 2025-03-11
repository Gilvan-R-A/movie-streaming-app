import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./SearchResults.module.css";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchSearchResults() {
      if (query) {
        const results = await searchMovies(query);
        setMovies(results);
      }
    }
    fetchSearchResults();
  }, [query]);

  return (
    <div className={styles.container}>
      <h1>Resultados para "{query}"</h1>
      <div className={styles.moviesGrid}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}
