import greekSaladImage from '../assets/greek-salad.jpg';
import bruschettaImage from '../assets/bruschetta.jpg';
import lemonTartImage from '../assets/lemon-tart.jpg';
import pastaImage from '../assets/pasta.jpg';
import grilledFishImage from '../assets/grilled-fish.jpg';
import tiramisuImage from '../assets/tiramisu.jpg';
import steakImage from '../assets/steak.jpg';

function Menu() {
  return (
    <main>
      <section className="App-menu">
        <h1>Our Full Menu</h1>
        <p className='App-menu-description'>Explore our delicious menu offerings, crafted with the freshest ingredients and traditional recipes.</p>
        <div className="App-menu-specials">

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
            </div>
          </div>

          {/* Greek Salad Item */}
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

          {/* Pasta Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={pastaImage} alt="Pasta" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Pasta Primavera</h3>
              <div className="price">$16.99</div>
              <p>Fresh pasta with seasonal vegetables, tossed in a light garlic and herb sauce. Vegetarian option available.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
          </div>

          {/* Grilled Fish Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={grilledFishImage} alt="Grilled Fish" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Grilled Salmon</h3>
              <div className="price">$22.99</div>
              <p>Fresh Atlantic salmon grilled to perfection, served with lemon butter sauce and seasonal vegetables.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
          </div>

          {/* Steak Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={steakImage} alt="Steak" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Filet Mignon</h3>
              <div className="price">$28.99</div>
              <p>8oz tender filet mignon cooked to your preference, served with roasted potatoes and grilled asparagus.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
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

          {/* Tiramisu Item */}
          <div className="App-menu-item">
            <div className="App-menu-item-image-container">
              <img src={tiramisuImage} alt="Tiramisu" className="App-menu-item-image" />
            </div>
            <div className="App-menu-item-content">
              <h3>Tiramisu</h3>
              <div className="price">$9.99</div>
              <p>Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.</p>
              <button className="delivery-btn">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;