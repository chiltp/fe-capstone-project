import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="App-nav">
      <ul className="App-nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/booking">Booking</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;