import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";

 export function App() {
   return (
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
   ) 
 }

