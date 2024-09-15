import { formatString, addSpaceToUnit } from '../utils';
import css from './VehicleItemDescription.module.css';

const VehicleItemDescription = ({ form, length, width, height, tank, consumption }) => {
  return (
    <div className={css.content}>
      <h4 className={css.title}>Vehicle Details</h4>
      <hr className={css.trim} />
      <ul className={css.list}>
        <li className={css.item}>
          Form <span>{formatString(form)}</span>
        </li>
        <li className={css.item}>
          Length <span>{addSpaceToUnit(length)}</span>
        </li>
        <li className={css.item}>
          Width <span>{addSpaceToUnit(width)}</span>
        </li>
        <li className={css.item}>
          Height <span>{addSpaceToUnit(height)}</span>
        </li>
        <li className={css.item}>
          Tank <span>{addSpaceToUnit(tank)}</span>
        </li>
        <li className={css.item}>
          Consumption <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleItemDescription;