import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

 export function App() {
   return (
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
   ) 
 }

