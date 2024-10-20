import { useState, useEffect } from "react";

import "./app.css";
import "./app.scss";
import web from "./assets/web.webp";
import testTxt from "./test.txt";
import JSONTxt from "./test.json";
import Hello from "./components/hello";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      hello github pages test sss1
      <p className="count">{count}</p>
      <img src={web} alt="web" />
      <p>{testTxt}</p>
      <p>{JSONTxt.name}</p>
      <button className="click" onClick={handleClick}>
        click
      </button>
      <Hello name={""} />
    </div>
  );
}

export default App;
