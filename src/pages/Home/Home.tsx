import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css"

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
    <div className={styles.container}>
      <h1>Filmes Populares</h1>

      <div className={styles.grid}>
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
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}
