import greekSaladImage from './assets/greek-salad.jpg';
import bruschettaImage from './assets/bruschetta.jpg';
import lemonTartImage from './assets/lemon-tart.jpg';

function Main() {
  return (
    <main>
      <section className="App-menu">
        <h2>This weeks specials!</h2>
        <div className="App-menu-specials">
          {/* Bruschetta Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={greekSaladImage} alt="Greek Salad" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Greek Salad</h3>
              <div className="price">$12.99</div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
          </div>
          {/* Bruschetta Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={bruschettaImage} alt="Bruschetta" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Bruschetta</h3>
              <div className="price">$8.99</div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <button className="delivery-btn">Order a delivery</button>
            </ div>
          </div>
          {/* Lemon Tart Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={lemonTartImage} alt="Lemon Tart" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Lemon Tart</h3>
              <div className="price">$15.05</div>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
