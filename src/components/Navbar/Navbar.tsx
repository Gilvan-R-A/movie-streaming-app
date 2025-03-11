import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navTop}>
        <h2>MovieApp</h2>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar filmes..."
        />
        <button>🔍</button>
      </form>

      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setIsOpen(false)}>
            Favoritos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
