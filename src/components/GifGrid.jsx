// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
// import GifGridItem from "./GifGridItem";
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { loading } = useFetchGifs();

  // useEffect(() => {
  //   getGifs(category).then(images => setImages(images));
  // }, [category]);

  return (
    <>
      <h3 className="text-center capitalize-words">{category}</h3>

      { loading ? "Loading ..." : "Loaded!" }

      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};

export default GifGrid;
