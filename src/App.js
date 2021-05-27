import React from "react";
import propTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  };
  // setState를 불러오면 react가 다시 render()를 동작시킴
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render(){
    return (
      <div>
        <h1>The number is:{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
