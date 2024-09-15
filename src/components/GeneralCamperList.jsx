import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { changePage } from '../redux/campers/campersSlice';
import { selectCampers, selectPage } from '../redux/campers/campersSelectors';
import CamperList from './CamperList';
import Button from './Button';
import css from './GeneralCamperList.module.css';

const GeneralCamperList = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const newVisibleItems = filteredItems.slice(0, itemsPerPage * page);
    setVisibleItems(newVisibleItems);
  }, [filteredItems, page]);

  const handleClick = () => {
    if (visibleItems.length < filteredItems.length) {
      dispatch(changePage(page + 1));
    }
  };

  const isLoadMoreVisible = visibleItems.length < filteredItems.length;

  return (
    <div className={css.container}>
      {visibleItems.length > 0 ? (
        <CamperList items={visibleItems} />
      ) : (
        <p className={css.abs}>No campers found.</p>
      )}

      {isLoadMoreVisible && (
        <Button variant="outlined" onClick={handleClick} aria-label="Load more">
          Load more
        </Button>
      )}
    </div>
  );
};

export default GeneralCamperList;