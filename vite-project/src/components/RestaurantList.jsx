import { restaurants } from "../data";

const RestaurantList = ({ select }) => (
  <div className="container">
    <h2>Restaurants</h2>
    {restaurants.map(r => (
      <div key={r.id} className="restaurant" onClick={() => select(r)}>
        <b>{r.name}</b> | ⭐ {r.rating}
      </div>
    ))}
  </div>
);

export default RestaurantList;
