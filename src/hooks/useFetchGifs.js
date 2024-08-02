import { useEffect, useState } from "react";
import { getGitfs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
   const [images, setImages] = useState([]);
   const [isLoading, setIsloading] = useState(true);

   const getImages = async () => {
      const newImages = await getGitfs(category);
       setImages(newImages)
       setIsloading(false);
  }

  useEffect(() => {
      getImages();
  }, )

  return {
    images,
    isLoading,
  };
}


