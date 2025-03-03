import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "pt-BR",
    },
});

export const getPopularMovies = async () => {
    try {
        const response =await api.get("/movie/popular");
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
        return [];
    }
};