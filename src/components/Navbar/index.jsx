import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LOGO from '../../assets/logo/apronet_logo.jpeg';
import { BiMenu, BiX } from 'react-icons/bi';
import './style.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const isMobileScreen = width => {
    return width <= 991;
  };

  useEffect(() => {
    const handleScreenResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__logo">
            <img src={LOGO} alt="Apronet Logo" />
          </div>
          {isMobileScreen(screenWidth) ? (
            <div className="navbar__menu_responsive" onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? <BiX size={40} /> : <BiMenu size={40} />}
            </div>
          ) : (
            <div className="navbar__links_content">
              <ul className="navbar__links">
                <Link to="/">Accueil</Link>
                <Link to="/about">Qui sommes-nous?</Link>
                <HashLink smooth to="/#services">
                  Nos services
                </HashLink>
                <Link to="/avantages">Nos avantages</Link>
                <HashLink smooth to="/#footer">
                  Contact
                </HashLink>
              </ul>
              <button className="navbar__links_contact">Réservez notre service!</button>
            </div>
          )}
          {isMobile && isMobileScreen(screenWidth) && (
            <div className="navbar__links_mobile_content">
              <ul className="navbar__links_mobile">
                <Link to="/">Accueil</Link>
                <Link to="/about">Qui sommes-nous?</Link>
                <Link to="/#services">Nos services</Link>
                <Link to="/avantages">Nos avantages</Link>
                <Link to="/#footer">Contact</Link>
              </ul>
              <button className="navbar__links_contact_mobile">Réservez notre service!</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
