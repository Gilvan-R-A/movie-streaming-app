export function Footer() {
    return (
        <footer style={footerStyles}>
            <p>&copy; {new Date().getFullYear()} Desenvolvido por Gilvan Alves. Todos os direitos reservados.</p>
        </footer>
    );
}

const footerStyles: React.CSSProperties = {  
        textAlign: "center",
        padding: "15px",
        background: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%", 
};