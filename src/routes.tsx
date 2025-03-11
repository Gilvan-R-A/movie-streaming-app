import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Favorites } from "./pages/Favorites/Favorites";
import { SearchResults } from "./pages/SearchResults/SearchResults";

export function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/search" element={<SearchResults />} />
            </Routes>       
    )
}