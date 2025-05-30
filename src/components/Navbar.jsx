import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span>Savoria</span>
        </Link>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
          </li>
          <li className={location.pathname === '/menu' ? 'active' : ''}>
            <Link to="/menu" onClick={closeMenu}>Menú</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={closeMenu}>Sobre Nosotros</Link>
          </li>
          {user ? (
            <li className="auth-item">
              <button className="button" onClick={() => { logout(); closeMenu(); }}>
                Cerrar sesión
              </button>
            </li>
          ) : (
            <>
              <li className={location.pathname === '/login' ? 'active auth-item' : 'auth-item'}>
                <Link to="/login" onClick={closeMenu} className="button button-secondary">
                  Iniciar sesión
                </Link>
              </li>
              <li className={location.pathname === '/register' ? 'active auth-item' : 'auth-item'}>
                <Link to="/register" onClick={closeMenu} className="button">
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;