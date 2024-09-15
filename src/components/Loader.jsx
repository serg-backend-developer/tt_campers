import { ScaleLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.main}>
      <ScaleLoader color="#0c2bf9" />
    </div>
  );
};

export default Loader;