import { useState, useEffect } from "react";

const FAVORITES_KEY = "favoriteMovies";

export function useFavorites() {
    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() =>{
        const storedFavorites = localStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    function toggleFavorite(movie: any) {
        let updatedFavorites;
        if (favorites.some(fav => fav.id === movie.id)) {
            updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
        } else {
            updatedFavorites = [...favorites, movie];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    }

    function isFavorite(movieId: number) {
        return favorites.some(fav => fav.id === movieId);
    }

    return { favorites, toggleFavorite, isFavorite }
}