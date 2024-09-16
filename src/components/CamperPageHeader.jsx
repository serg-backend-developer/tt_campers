import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectFavoriteCamper } from '../redux/favorites/favoritesSelectors';
import { addFavorite, removeFavorite } from '../redux/favorites/favoritesSlice';
import { messages } from '../utils';
import Icon from './Icon';
import css from './CamperPageHeader.module.css';

const CamperPageHeader = ({ camper }) => {
  const { id, name, price, rating, location, reviews = [] } = camper;
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectFavoriteCamper(state, id));
  const locationPath = useLocation();

  const isPathDetails = locationPath.pathname.includes('/catalog/');

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
      messages.info('Camper removed from favorites.');
    } else {
      dispatch(addFavorite(camper));
      messages.success('Camper added to favorites.');
    }
  };

  return (
    <div className={css.header}>
      <div className={css.info}>
        <h2 className={css.cTitle}>{name}</h2>

        {!isPathDetails && (
          <p className={css.cPrice}>
            <span className={css.price}>€{price.toFixed(2)}</span>
            <Icon
              name="icon-heart"
              className="heart"
              onClick={handleClick}
              active={isFavorite}
            />
          </p>
        )}
      </div>

      <p className={css.cRating}>
        <span className={css.rating}>
        <svg
        width="16"
        height="16"
        fill={'var(--stars)'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M15.116 1.676a1 1 0 0 1 1.769 0l3.777 7.158c.145.274.408.466.714.519l7.975 1.38a1 1 0 0 1 .547 1.682l-5.641 5.804a1 1 0 0 0-.273.839l1.152 8.01a1 1 0 0 1-1.431 1.04l-7.263-3.571a.998.998 0 0 0-.882 0l-7.262 3.571a1 1 0 0 1-1.431-1.04l1.152-8.01a1 1 0 0 0-.273-.839l-5.64-5.804a1 1 0 0 1 .547-1.682l7.974-1.38a.998.998 0 0 0 .714-.519l3.776-7.158z" />
      </svg>
          <span className={css.valueRating}>
            {rating} ({reviews.length} Reviews)
          </span>
        </span>
        <span className={css.location}>
          <Icon name="icon-map" className="smallest" />
          {location.split(', ').reverse().join(', ')}
        </span>
      </p>

      {isPathDetails && <p className={css.price}>€{price.toFixed(2)}</p>}
    </div>
  );
};

export default CamperPageHeader;