import logo from '../assets/logo.jpg';
import Nav from '../components/Nav';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="Little Lemon Logo" width="155" />
      <Nav />
    </header>
  );
}

export default Header;