const GifGridItem = ({ title, url }) => {

  return (
    <figure className="card">
      <img src={ url } alt={ title } />
      <figcaption className="card__title">{ title }</figcaption>
    </figure>
  );
}

export default GifGridItem;