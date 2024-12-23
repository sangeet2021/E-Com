import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import { CartContextProovider } from "./Context/CartContext";
import { useRef } from "react";
import About from "./Components/About";

function App() {
  const shopRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <CartContextProovider>
      <Nav
        onShop={scrollToShop}
        onHome={scrollToHome}
        onAbout={scrollToAbout}
      />
      <Home onShop={scrollToShop} ref={homeRef} />
      <Shop ref={shopRef} />
      <About ref={aboutRef} />
    </CartContextProovider>
  );
}

export default App;
