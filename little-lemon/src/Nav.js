import logo from './assets/logo.jpg';
function Nav() {
  return (
    <nav className="App-nav">
      <img src={logo} alt="Little Lemon Logo" width="155" />
      <ul className="App-nav-list">
        <li><a href="#home" className="App-link">Home</a></li>
        <li><a href="#menu" className="App-link">Menu</a></li>
        <li><a href="#about" className="App-link">About</a></li>
        <li><a href="#contact" className="App-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
