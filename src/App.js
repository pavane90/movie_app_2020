import React from "react";

function Food({ name, image }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image}></img>
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    name: "kimbob",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FY-Y9CXGRJPU%2Fmaxresdefault.jpg&f=1&nofb=1"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} image={dish.image} />
        // 프로퍼티의 이름을 그대로 컴포넌트에 보낼 수 있다.
      ))}
    </div>
  );
}

export default App;
