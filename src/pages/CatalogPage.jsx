import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/Container';
import Filters from '../components/Filters';
import GeneralCamperList from '../components/GeneralCamperList';
import Loader from '../components/Loader';
import { getAllCampers } from '../redux/campers/campersOps';
import { selectIsLoading } from '../redux/campers/campersSelectors';
import { changeFilter, initialState } from '../redux/filters/filtersSlice';
import { messages } from '../utils';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCampers())
      .unwrap()
      .catch(error => messages.error(error));
    return () => dispatch(changeFilter(initialState));
  }, [dispatch]);

  return (
    <>
      <main>
        <section className={css.section}>
          <Container className="catalog">
            <Filters />
            {isLoading && <Loader />}
            <GeneralCamperList />
          </Container>
        </section>
      </main>
    </>
  );
};

export default CatalogPage;