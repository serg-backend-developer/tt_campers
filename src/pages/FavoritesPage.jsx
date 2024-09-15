import { useSelector } from 'react-redux';

import CamperList from '../components/CamperList';
import Container from '../components/Container';
import { selectFavoritesCampers } from '../redux/favorites/favoritesSelectors';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavoritesCampers);

  return (
    <>
      <main>
        <section className={css.section}>
          <Container className="favorites">
            {favorites.length > 0 ? (
              <CamperList items={favorites} />
            ) : (
              <p className={css.abs}>
                You have no favorite campers yet
              </p>
            )}
          </Container>
        </section>
      </main>
    </>
  );
};

export default FavoritesPage;