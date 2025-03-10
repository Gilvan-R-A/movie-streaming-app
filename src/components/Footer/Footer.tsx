import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Desenvolvido por Gilvan Alves. Todos os direitos reservados.</p>
        </footer>
    );
}

