import propTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    rating: 4,
  },
  {
    id: 2,
    name: "라면",
    rating: 4.1,
  },
  {
    id: 3,
    name: "밥",

  },
  {
    id: 4,
    name: "김밥",
    rating: 3.4,
  }
]

function Food({name, rating}){
  return (
    <div>
      <h1>I love {name}</h1>
      <h4>{rating}/5</h4>
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.number,
};


function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
