import { Link } from 'react-router-dom';

import Button from './Button';
import CamperPageHeader from './CamperPageHeader';
import EquipmentList from './EquipmentList';
import css from './Camper.module.css';
import { getFilteredVehicleEquipment } from './utils';

const Camper = ({ camper }) => {
  const { id, name, description, gallery = [] } = camper;

  const equipment = getFilteredVehicleEquipment({ ...camper });

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} className={css.image} />

      <div className={css.info}>
        <CamperPageHeader camper={camper} />

        <p className={css.description}>{description}</p>

        <EquipmentList equipment={equipment} />

        <Button aria-label="Show More">
          <Link to={`/catalog/${id}/features`} className={css.link}>
            Show More
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Camper;