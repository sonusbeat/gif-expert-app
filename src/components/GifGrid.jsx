import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);



  useEffect(() => {
    getGifs(category)
      .then(images => setImages(images));
  }, [ category ]);

  return (
    <>
    <h3 className="text-center capitalize-words">{ category }</h3>

    <div className="card-grid">

      {
        images.map(img => (
          <GifGridItem
            key={ img.id }
            { ...img }
          />
        ))
      }
    </div>
  </>
  );
};

export default GifGrid;
