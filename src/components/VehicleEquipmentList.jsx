import VehicleEquipmentItem from './VehicleEquipmentItem';

import css from './VehicleEquipmentList.module.css';

const VehicleEquipmentList = ({ equipment }) => {
  return (
    <ul className={css.equipmentList}>
      {equipment.map(({ icon, label }) => (
        <VehicleEquipmentItem key={label} icon={icon} label={label} />
      ))}
    </ul>
  );
};

export default VehicleEquipmentList;