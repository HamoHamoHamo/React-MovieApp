function Potato({name}){
  return <h1>I love {name}</h1>;
}

const foodILike = [
  {
    name: "Kimchi",
  },
  {
    name: "라면",
  },
  {
    name: "밥",
  },
  {
    name: "김밥",
  }
]

function App() {
  return (
    <div>
      <h1 className="App">Hello~~~~~~~~</h1>
      {foodILike.map(dish => (
        <Potato name={dish.name} />
      ))}
    </div>
  );
}

export default App;
