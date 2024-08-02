import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {


    const {images,isLoading } = useFetchGifs(category);


  return (
      <>
          <h3>{category}</h3>
            {isLoading &&  <h2> Loading</h2>} 
          <div className='card-grid'>
              {
                  images.map(({ title,url,id}) => (
                      <GifItem title={title} url={url} key={id}
                        
                      />
                    ))
              }

         </div>
      
      </>
  )
}
GifGrid.propTypes = {
    category:PropTypes.string
}