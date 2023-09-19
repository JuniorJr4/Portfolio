// src/components/Navbar.js
import  { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="links px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-200 bg-slate-600">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
            </div>
        </div>
    );
}