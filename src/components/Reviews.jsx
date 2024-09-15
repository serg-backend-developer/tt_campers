import { useSelector } from 'react-redux';

import Icon from './Icon';
import { selectCamperById } from '../redux/campers/campersSelectors';
import css from './Reviews.module.css';

const Reviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (!reviews?.length) return <p className={css.abs}>No reviews</p>;

  const generateIconStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="icon-star"
        className={index < rating ? 'ratingStar' : 'ratingNoStar'}
      />
    ));
  };

  return (
    <ul className={css.rev}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li className={css.item} key={reviewer_name}>
          <div className={css.header}>
            <p className={css.foto}>{reviewer_name[0].toUpperCase()}</p>
            <div className={css.info}>
              <p className={css.name}>{reviewer_name}</p>
              <p className={css.rating}>{generateIconStars(reviewer_rating)}</p>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;