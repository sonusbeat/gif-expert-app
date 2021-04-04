import { useState } from "react";
import "./GifExpertApp.scss";
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const [ categories, setCategories ] = useState([]); // Originalmente
  const [ categories, setCategories ] = useState(defaultCategories);

  return (
    <div className="container">
      <h1>Gift Expert App</h1>

      <AddCategory setCategories={ setCategories } />

      <hr />

      {
        categories.map(category => (
          <GifGrid key={category} category={ category } />
        ))
      }

    </div>
  );
};

export default GifExpertApp;
