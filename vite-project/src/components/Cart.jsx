const Cart = ({ cart }) => {
  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.map((i, index) => (
        <p key={index}>{i.name} - ₹{i.price}</p>
      ))}
      <b>Total: ₹{total}</b>
    </div>
  );
};

export default Cart;
