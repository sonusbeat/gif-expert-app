import { useState } from "react";
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["my hero academy"]);

  // const handleAdd = () => {
  //
  //   setCategories(categories => ['Saint Seiya', ...categories]);

  //   console.log(categories);
  // };

  return (
    <>
      <h1 className="text-center">Gif Expert App</h1>
      <hr />

      <AddCategory setCategories={setCategories} />

      {categories.map(category => (
        <GifGrid
          key={ category }
          category={ category }
        />
      ))}
    </>
  );
};

export default GifExpertApp;
