import { sculptureList } from "../data"
import { useState } from "react";
const Gallery = () => {
    // let index = 0;
    // function handleClick() {
    //     index = index + 1;
    // }
    // let sculpture = sculptureList[index];

    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((index + 1) % sculptureList.length);
    }

    let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

export default Gallery