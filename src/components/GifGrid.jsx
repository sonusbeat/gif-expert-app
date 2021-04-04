import GifGridItem from './GifGridItem';
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <section>
      <h3 className="text-center animate__animated animate__fadeIn">{ category }</h3>

      {
        loading &&
        <p className="text-center animate__animated animate__flash">Loading ...</p>
      }

      <main className="card-grid">
        {
          images.map(img => (
            <GifGridItem key={ img.id } { ...img } />
          ))
        }
      </main>
    </section>
  );
}

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}