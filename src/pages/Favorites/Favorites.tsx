import { useFavorites } from "../../hooks/useFavorites";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.css"

export function Favorites() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div className={styles.favoritesContainer}>
            <h1>Filmes Favoritos</h1>

            {favorites.length === 0 ? (
                <p>Nenhum filme favorito adicionado.</p>
            ) : (
                <div className={styles.favorites}>
                    {favorites.map((movie) =>(
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                             />
                            </Link>
                            <h3>{movie.title}</h3>
                            <button onClick={() => toggleFavorite(movie)}>Remover</button>

                        </div>
                    )) }
                </div>
            )}
        </div>
    );
}