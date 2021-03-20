import PropTypes from 'prop-types';

/**
 * Get gif from api
 *
 * @param {string} category
 * @return {Promise<object[]>}
 */
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1LMZhLzPv822rLWSezIbmvbTvoYZowKo`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images?.downsized_medium.url,
  }));

  return gifs;
};

getGifs.propTypes = {
  category: PropTypes.string.isRequired
};
