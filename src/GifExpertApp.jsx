import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // Eso lo puedo hacer porque creé el archivo index.js en /components.

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['ghibli']);

  const onAddCategory = (newCategory) => {
    const categoriesClean = categories.map(cat => cat.trim().toLowerCase());

    if (categoriesClean.includes(newCategory.toLowerCase())) return;

    setCategories([newCategory, ...categories]);
  }
  
  return (
    <>
      <h1>GifExpert App</h1>  

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) } 
      />
  
      {
        categories.map( category => (
          
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }
    </>
  )
}
