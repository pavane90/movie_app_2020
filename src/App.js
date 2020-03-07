import React from "react";
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    id: 2,
    name: "kimbob",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FY-Y9CXGRJPU%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.3
  }
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        ></Food>
      ))}
    </div>
  );
}

export default App;
