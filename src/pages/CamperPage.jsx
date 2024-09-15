import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router-dom';

import Container from '../components/Container';
import CamperPageHeader from '../components/CamperPageHeader';
import Navigation from '../components/Navigation';
import CamperFotoModal from '../components/CamperFotoModal';
import Application from '../components/Application';
import Loader from '../components/Loader';

import { getCamperById } from '../redux/campers/campersOps';
import { selectIsLoading, selectCamperById } from '../redux/campers/campersSelectors';
import { messages } from '../utils';
import css from './CamperPage.module.css';

const CamperPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camper = useSelector(selectCamperById);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalParams, setModalParams] = useState({});

  const handleClick = event => {
    setModalParams({
      imgSrc: event.target.dataset.original,
      name: camper.name,
    });
    setIsOpenModal(true);
  };

  useEffect(() => {
    dispatch(getCamperById(camperId))
      .unwrap()
      .catch(error => messages.error(error));
  }, [dispatch, camperId]);

  return (
    <>
      {isLoading && <Loader />}

      <main>
        <section className={css.section}>
          <Container>
            {camper && (
              <div className={css.main}>
                <CamperPageHeader camper={camper} />
                <ul className={css.list}>
                  {camper.gallery.map(({ thumb, original }) => (
                    <li key={thumb} className={css.listItem}>
                      <img
                        src={thumb}
                        data-original={original}
                        alt="Camper"
                        className={css.listImage}
                        onClick={handleClick}
                      />
                    </li>
                  ))}
                </ul>
                <p className={css.description}>{camper.description}</p>
                <Navigation />
                <div className={css.info}>
                  <Suspense fallback={<Loader />}>
                    <Outlet />
                  </Suspense>
                  <Application />
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>
      <CamperFotoModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        {...modalParams}
      />
    </>
  );
};

export default CamperPage;