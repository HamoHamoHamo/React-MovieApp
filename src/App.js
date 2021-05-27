function Potato({name}){
  return <h1>I love {name}</h1>;
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
  },
  {
    id: 2,
    name: "라면",
  },
  {
    id: 3,
    name: "밥",
  },
  {
    id: 4,
    name: "김밥",
  }
]

function renderFood(dish) {
  return <Potato key={dish.id} name={dish.name} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
