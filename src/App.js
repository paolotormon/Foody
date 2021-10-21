import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Card from "./components/UI/Card";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}>Wow</Header>
      <main>
        <Meals />
      </main>
      <Footer/>
    </CartProvider>
  );
}

export default App;
