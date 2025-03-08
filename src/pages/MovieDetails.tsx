import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../services/api";


export function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [videoKey, setVideoKey] = useState<string | null>(null);

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
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

            {videoKey ? (
                <div>
                    <h2>Trailer</h2>
                    <iframe 
                        width="100%" 
                        height="400" 
                        src={`https://www.youtube.com/embed/${videoKey}`} 
                        title="Trailer do Filme" 
                        style={{border: "none"}} 
                        allowFullScreen
                        ></iframe>
                </div>
            ) : (
                <p>Trailer não disponível.</p>
            )}
        </div>
    );
}

