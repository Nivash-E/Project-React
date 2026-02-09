const Checkout = () => (
  <div className="container">
    <h2>Checkout</h2>
    <input placeholder="Delivery Address" />
    <select>
      <option>Cash on Delivery</option>
      <option>Card</option>
    </select>
    <button>Place Order</button>
  </div>
);

export default Checkout;
