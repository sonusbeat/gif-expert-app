const GifGridItem = ({ title, url }) => {

  return (
    <figure className="card animate__animated animate__fadeIn">
      <img src={ url } alt={ title } />
      <figcaption className="card__title">{ title }</figcaption>
    </figure>
  );
}

export default GifGridItem;