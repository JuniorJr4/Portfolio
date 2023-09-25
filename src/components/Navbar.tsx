// src/components/Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between bg-zinc-100 dark:bg-zinc-950 pr-6">
      <div className="my-name">
        <section className="logo px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-3xl">
          <h1 className="name">Clint Gardner</h1>
        </section>
      </div>
      <div className="links flex justify-end px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-zinc-950 dark:text-zinc-100 text-3xl ">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
      </div>
    </nav>
  );
}
