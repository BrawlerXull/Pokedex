import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data.results); 
      })
      .catch((error) => console.log(error));
  },[]);

  return (
    <div className="page">
      {data.results.map((pokemon, index) => (
        <Pokemon name={pokemon.name} key={index} url={pokemon.url} />
      ))}
    </div>
  )
}

export default App;
