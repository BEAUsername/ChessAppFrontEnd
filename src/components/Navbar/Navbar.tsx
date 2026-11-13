import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './Navbar.css';
import homeIcon from '../../assets/icons/home.svg';
import playIcon from '../../assets/icons/play.svg';
import playersIcon from '../../assets/icons/players.svg';
import accountIcon from '../../assets/icons/join.svg';
import profileIcon from '../../assets/icons/profile.svg';
import settingsIcon from '../../assets/icons/settings.svg';

function Navbar() {
    const { username, loading } = useAuth();

    return (
        <nav className="navbar">
            <NavLink to="/" end className="navbar-button" aria-label="Home"><img src={homeIcon} /></NavLink>
            <NavLink to="/play" className="navbar-button" aria-label="Play"><img src={playIcon} /></NavLink>
            <NavLink to="/players" className="navbar-button" aria-label="Players"><img src={playersIcon} /></NavLink>

            <div className="navbar-bottom">
                {loading ? null : username === null ? (
                    <NavLink to="/login" className="navbar-button" aria-label="Account"><img src={accountIcon} /></NavLink>
                ) : (
                    <>
                        <NavLink to={`/user/${username}`} className="navbar-button" aria-label="Profile"><img src={profileIcon} /></NavLink>
                        <NavLink to="/settings" className="navbar-button" aria-label="Settings"><img src={settingsIcon} /></NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;