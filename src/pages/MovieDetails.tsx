import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => setMovie(response.data))
            .catch((error) => console.error("Erro ao buscar detalhes do filme", error));
    }, [id]);

    if (!movie) return <p>Carregando...</p>

    return (
        <div style={{ padding: "20px", textAlign: "center"}}>
            <h1>{movie.title}</h1>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} width="300px" />
            <p><strong>Sinopse:</strong> {movie.overview}</p>
            <p><strong>Avaliação:</strong> {movie.vote_average.toFixed(1)}</p>
            <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
        </div>
    );
}

