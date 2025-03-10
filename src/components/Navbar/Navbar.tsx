import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"

export function Navbar() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${searchTerm}`);
            setSearchTerm("");
        }
    }

    return (
        <nav className={styles.navbar}>
            <h2>MovieApp</h2>

            <form onSubmit={handleSearch}>
                <input type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Buscar filmes..."
                />
                <button>
                🔍
                </button>
            </form>

            <ul className={styles.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>
                
            </ul>
        </nav>
    );
}
