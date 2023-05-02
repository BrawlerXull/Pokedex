import React from 'react'
import { useEffect ,useState} from 'react';

function Pokemon(props) {
  const [data, setData] = useState();
    useEffect(() => {
        fetch(props.url)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            console.log(data.sprites.other.dream_world.front_default); 
          })
          .catch((error) => console.log(error));
      },[]);
  return (
    <div className="pokemon">
        <h1>{props.name}</h1>
        {data && <img src="https://avatars.githubusercontent.com/u/76207818?v=4" alt="" />}
    </div>
  )
}

export default Pokemon