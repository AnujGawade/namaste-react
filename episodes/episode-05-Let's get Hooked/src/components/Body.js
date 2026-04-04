import RestaurantData from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {RestaurantData.map((item) => (
          <RestaurantCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
