
import PropTypes from 'prop-types';
export const GifItem = ({title,url}) => {
  return (
    <div className='card'>
      <img src={ url} alt={title} />
      
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string,
  url:PropTypes.string
}

