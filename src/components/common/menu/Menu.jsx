import './menu.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = ({ active, setActive }) => {
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location, setActive]);

  return (
    <ul className={`menu ${active ? 'active' : ''}`}>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link className='link' to="/">Home</Link>
      </li>
      <li className={location.pathname === '/about' ? 'active' : ''}>
        <Link className='link' to="/about">About</Link>
      </li>
      <li className={location.pathname === '/portfolio' ? 'active' : ''}>
        <Link className='link' to="/portfolio">Portfolio</Link>
      </li>
      <li className={location.pathname === '/contact' ? 'active' : ''}>
        <Link className='link' to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
