import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectFavoriteCamper } from './redux/favorites/favoritesSelectors';
import { addFavorite, removeFavorite } from './redux/favorites/favoritesSlice';
import { messages } from './utils/messages';
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
        <h2 className={css.title}>{name}</h2>

        {!isPathDetails && (
          <p className={css.camperPrice}>
            <span className={css.price}>€{price.toFixed(2)}</span>
            <Icon
              name="icon-heart"
              className="iconHeart"
              onClick={handleClick}
              active={isFavorite}
            />
          </p>
        )}
      </div>

      <p className={css.camperRating}>
        <span className={css.rating}>
          <Icon name="icon-star" className="iconStar" />
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