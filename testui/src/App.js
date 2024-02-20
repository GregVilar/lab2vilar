import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Gallery from "./Gallery.js";

const logoData = [
  {
    name: "KFC",
    photoName: "kfc.svg",
  },
];

const galleryData = [
  {
    name: "Double Patty Zinger",
    photoName: "borgi.png",
    price: 150,
    quantity: 1,
  },

  {
    name: "Super Platter",
    photoName: "combo.png",
    price: 170,
    quantity: 2,
  },

  {
    name: "1 PC Chicken Meal",
    photoName: "manok.png",
    price: 130,
    quantity: 3,
  },

  {
    name: "BBQ Bacon Snacker",
    photoName: "borgir.png",
    price: 120,
    quantity: 4,
  },

  {
    name: "Sisig Bowl",
    photoName: "sisig.png",
    price: 170,
    quantity: 5,
  },

  {
    name: "Water",
    photoName: "twobig.png",
    price: 70,
    quantity: 0,
  },

  {
    name: "Twister Combo",
    photoName: "lumpia.png",
    price: 170,
    quantity: 0,
  },

  {
    name: "Extreme Bucket",
    photoName: "spicy.png",
    price: 170,
    quantity: 2,
  },
];

function App() {
  return (
    <div className="app">
      {logoData.map((logo) => (
        <Header logoObj={logo} key={logo.name} />
      ))}
      <Navbar />

      <h1>Whats Hot</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Secret Menu</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Buckets and Platters</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Fully Loaded Meals</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Chicken Meals</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Pastas and Bowls</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Snacks</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Sandwiches</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Fixins and Extras</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <h1>Desserts and Drinks</h1>

      <div className="container">
        <div className="app2">
          {galleryData.map((galleryImg) => (
            <Gallery galleryImgObj={galleryImg} key={galleryImg.name} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
