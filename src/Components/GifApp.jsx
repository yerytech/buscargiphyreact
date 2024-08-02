import { useState } from "react"
import { AddCategory,GifGrid} from "./Components";



export const GifApp = () => {
     
    const [categories , setCategories] =useState(['personas'])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
   }

     return (
       <>
         <h1> GifApp</h1>

         <AddCategory
           onNewCategory={onAddCategory}
         />

           {categories.map((category) => 
              (
               <GifGrid
                 key={category}
                 category={category} />
             )
         )};
         
         
       </>
     );


}