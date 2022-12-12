import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState();
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <section className="section">
        <div className="title">
          <h2>Color Generator</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            type="text"
          />
          <button>Submit</button>
        </form>
      </section>
      <div className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
