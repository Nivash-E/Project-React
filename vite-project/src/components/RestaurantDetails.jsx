const RestaurantDetails = ({ restaurant, addToCart }) => {
  if (!restaurant) return null;

  return (
    <div className="container">
      <h2>{restaurant.name}</h2>
      {restaurant.menu.map(item => (
        <div key={item.id} className="menu">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
