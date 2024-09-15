import { useSelector } from 'react-redux';

import { selectCamperById } from '../redux/campers/campersSelectors';
import VehicleEquipmentList from './VehicleEquipmentList';
import VehicleItemDescription from './VehicleItemDescription';
import { getFilteredVehicleEquipment } from '../utils';
import css from './Features.module.css';

const Features = () => {
  const camper = useSelector(selectCamperById);

  const vehicleEquipment = getFilteredVehicleEquipment({ ...camper });

  return (
    <div className={css.content}>
      <VehicleEquipmentList equipment={vehicleEquipment} />

      <VehicleItemDescription {...camper} />
    </div>
  );
};

export default Features;