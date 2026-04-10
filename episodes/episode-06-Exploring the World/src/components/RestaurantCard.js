import { IMG_URL } from '../utils/constants';

const RestaurantCard = ({ data }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
  } = data;

  return (
    <div className="restaurant-card">
      <img src={IMG_URL + cloudinaryImageId} alt={name} />

      <div className="restaurant-details">
        <div className="top-row">
          <h3 className="name">{name}</h3>
          <span className="rating">{avgRating} ⭐</span>
        </div>

        <p className="cuisines">{cuisines.join(', ')}</p>

        <div className="meta">
          <span>{costForTwo}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
