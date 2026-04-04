const RestaurantCard = ({ data }) => {
  const { name, image, cuisines, rating, costForTwo } = data;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src="https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg"
        alt={name}
      />

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
