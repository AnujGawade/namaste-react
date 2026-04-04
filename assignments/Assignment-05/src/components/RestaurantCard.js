import { RESTAURANT_IMAGE } from '../utils/contants';

const RestaurantCard = ({ data }) => {
  const { name, image, cuisines, rating, costForTwo } = data;

  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={RESTAURANT_IMAGE} alt={name} />

      <div className="restaurant-details">
        <div className="top-row">
          <h3 className="name">{name}</h3>
          <span className="rating">{rating} ⭐</span>
        </div>

        <p className="cuisines">{cuisines.join(', ')}</p>

        <div className="meta">
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
