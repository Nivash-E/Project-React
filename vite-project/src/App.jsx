import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderTracking from "./components/OrderTracking";
import RestaurantDashboard from "./components/RestaurantDashboard";
import DeliveryDashboard from "./components/DeliveryDashboard";
import Reviews from "./components/Reviews";

function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <>
      <Login />
      <Register />
      <RestaurantList select={setSelected} />
      <RestaurantDetails restaurant={selected} addToCart={addToCart} />
      <Cart cart={cart} />
      <Checkout />
      <OrderTracking />
      <RestaurantDashboard />
      <DeliveryDashboard />
      <Reviews />
    </>
  );
}

export default App;
