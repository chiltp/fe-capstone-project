import headerImage from './assets/header.jpg';

function Header() {
  return (
    <header className="App-header">
      <div className='App-header-content'>
        <h1 className="App-header-title">Little Lemon</h1>
        <h2 className="App-header-subtitle">Chicago</h2>
        <p className="App-header-description">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="App-header-button">Reserve a Table</button>
      </div>
      <div className="App-header-image">
        <img src={headerImage} alt="Restaurant" />
      </div>
    </header>
  );
}

export default Header;
