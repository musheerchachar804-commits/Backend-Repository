 
import React, { useEffect, useState } from "react";
import Card from "./Components/Card.jsx";
 import './App.css'
const App = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.github.com/users?per_page=40&since=${num || 0}`
      );

      const result = await res.json();
      setData(result);
    }

    getData();
  }, [num]);

  return (
    <div className="container">
      <input
        type="number"
        value={num}

        placeholder="Enter starting user ID"
        onChange={(e) => setNum(e.target.value)}
      />

      <div className="cards">
        {data.map((info) => (
          <Card key={info.id} user={info} />
        ))}
      </div>
    </div>
  );
};

export default App;
