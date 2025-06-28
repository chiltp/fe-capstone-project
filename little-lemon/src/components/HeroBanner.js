import heroImage from '../assets/hero.jpg';

function heroBanner() {
  return (
    <header className="App-hero">
      <div className='App-hero-content'>
        <h1 className="App-hero-title">Little Lemon</h1>
        <h2 className="App-hero-subtitle">Chicago</h2>
        <p className="App-hero-description">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="App-hero-button">Reserve a Table</button>
      </div>
      <div className="App-hero-image">
        <img src={heroImage} alt="Restaurant" />
      </div>
    </header>
  );
}

export default heroBanner;
