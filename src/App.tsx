import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

 export function App() {
   return (
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
   ) 
 }

