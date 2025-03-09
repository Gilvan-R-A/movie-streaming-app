import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
    id: number;
    title: string;
    posterPath: string;
}

export function MovieCard({ id, title, posterPath }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <Link to={`/movie/${id}`} className={styles.link}>
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
            alt={title} 
            className={styles.image} />
            <h3 className={styles.title}>{title}</h3> 
            </Link>
        </div>
    );
}