import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>MovieApp</h1>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/favorites" style={styles.link}>Favoritos</Link>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#333",
        color: "#fff",
    },
    logo: {
        fontSize: "flex",
        fontWeight: "bold",
    },
    links: {
        display: "flex",
        gap: "15px",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.2rem",
    }
}