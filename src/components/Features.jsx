import { useSelector } from 'react-redux';

import { selectCamperById } from './redux/campers/campersSelectors';
import EquipmentList from './VehicleEquipmentList';
import VehicleDetails from './VehicleDetails';
import { getFilteredVehicleEquipment } from './utils';
import css from './Features.module.css';

const Features = () => {
  const camper = useSelector(selectCamperById);

  const vehicleEquipment = getFilteredVehicleEquipment({ ...camper });

  return (
    <div className={css.content}>
      <EquipmentList equipment={vehicleEquipment} />

      <VehicleDetails {...camper} />
    </div>
  );
};

export default Features;