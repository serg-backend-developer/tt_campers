import Icon from './Icon';

import css from './VehicleEquipmentItem.module.css';

const VehicleEquipmentItem = ({ icon, label }) => {
  return (
    <li className={css.main}>
      <Icon name={icon} className="small" />
      {label}
    </li>
  );
};

export default VehicleEquipmentItem;