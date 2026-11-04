import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className="navbar-button">H</NavLink>
            <NavLink to="/play" className="navbar-button">P</NavLink>
            <NavLink to="/players" className="navbar-button">Pl</NavLink>
        </nav>
    );
}

export default Navbar;