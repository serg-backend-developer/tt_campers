import { useSelector } from 'react-redux';

import { selectCamperById } from '../redux/campers/campersSelectors';
import css from './Reviews.module.css';

const Reviews = () => {
  const { reviews } = useSelector(selectCamperById);

  if (!reviews?.length) return <p className={css.abs}>No reviews</p>;

  const generateIconStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        fill={index < rating ? 'var(--stars)' : 'var(--badges)'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M15.116 1.676a1 1 0 0 1 1.769 0l3.777 7.158c.145.274.408.466.714.519l7.975 1.38a1 1 0 0 1 .547 1.682l-5.641 5.804a1 1 0 0 0-.273.839l1.152 8.01a1 1 0 0 1-1.431 1.04l-7.263-3.571a.998.998 0 0 0-.882 0l-7.262 3.571a1 1 0 0 1-1.431-1.04l1.152-8.01a1 1 0 0 0-.273-.839l-5.64-5.804a1 1 0 0 1 .547-1.682l7.974-1.38a.998.998 0 0 0 .714-.519l3.776-7.158z" />
      </svg>
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