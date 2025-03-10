import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../services/api";
import { useFavorites } from "../hooks/useFavorites";
import styles from "./MovieDetails.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";


export function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [videoKey, setVideoKey] = useState<string | null>(null);
    const { toggleFavorite, isFavorite } = useFavorites();

    useEffect(() => {
        async function fetchMovieDetails() {
            const movieData = await getMovieDetails(id!);
            setMovie(movieData);

            const fetchedVideos: any[] = await getMovieVideos(id!);

            const trailer = fetchedVideos.find((video) => video.type === "Trailer" && video.site === "YouTube");

            if (trailer) {
                setVideoKey(trailer.key);
            }
        }

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.movieDetails}>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className={styles.poster} 
                    />

                    <div className={styles.details}>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>

                        <button onClick={() => toggleFavorite(movie)} className={styles.favoriteButton}>
                            {isFavorite(movie.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                            {isFavorite(movie.id) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                        </button>
                    </div>
            </div>

            {videoKey ? (
                <div className={styles.trailer}>
                    <h2>Trailer</h2>
                    <iframe src={`https://youtube.com/embed/${videoKey}`} 
                    title="Trailer do Filme" 
                    allowFullScreen
                    ></iframe>

                </div>
            ) : (
                <p>Trailer não disponível.</p>
            )}
        </div>
    );
}

