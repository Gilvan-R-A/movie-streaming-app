import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./index.css";

export function App() {
  return (
    <Router>
      <div className="appContainer">
        <Navbar />
        <main className="mainContent">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
