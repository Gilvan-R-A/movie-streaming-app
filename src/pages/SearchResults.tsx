import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";

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
        <div>
            <h1>Resultados para "{query}"</h1>
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            width={200} />
                            <h3>{movie.title}</h3>
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    );
}