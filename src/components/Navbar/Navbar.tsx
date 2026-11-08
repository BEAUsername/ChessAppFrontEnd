import { NavLink } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../../assets/icons/home.svg';
import playIcon from '../../assets/icons/play.svg';
import playersIcon from '../../assets/icons/players.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className="navbar-button" aria-label="Home"><img src={homeIcon} /></NavLink>
            <NavLink to="/play" className="navbar-button" aria-label="Play"><img src={playIcon} /></NavLink>
            <NavLink to="/players" className="navbar-button" aria-label="Players"><img src={playersIcon} /></NavLink>
        </nav>
    );
}

export default Navbar;