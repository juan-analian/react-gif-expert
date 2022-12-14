import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
   
  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>Gift Expert App </h1>
      <p>React 18 + vite</p>
      
      <AddCategory  onNewCategory={ onAddCategory } />
    
    
        {
          categories.map( category =>  (
            <GifGrid key={category} category={category} />
          ))

        }
       
    </>
      
  )
}
