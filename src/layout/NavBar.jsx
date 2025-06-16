import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          E-Store
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to="/products" className="nav-item">Products</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
          <NavLink to="/cart" className="nav-item cart">🛒</NavLink>
        </div>
      </div>
    </nav>
  );
};
