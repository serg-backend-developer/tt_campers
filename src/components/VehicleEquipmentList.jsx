import VehicleEquipmentItem from './VehicleEquipmentItem';

import css from './VehicleEquipmentList.module.css';

const VehicleEquipmentList = ({ vehicleEquipment }) => {
  return (
    <ul className={css.main}>
      {vehicleEquipment.map(({ icon, label }) => (
        <VehicleEquipmentItem key={label} icon={icon} label={label} />
      ))}
    </ul>
  );
};

export default VehicleEquipmentList;