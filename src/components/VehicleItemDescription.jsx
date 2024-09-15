import { formatString, addSpaceBetweenDigitAndUnit } from '../utils';
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
          Length <span>{addSpaceBetweenDigitAndUnit(length)}</span>
        </li>
        <li className={css.item}>
          Width <span>{addSpaceBetweenDigitAndUnit(width)}</span>
        </li>
        <li className={css.item}>
          Height <span>{addSpaceBetweenDigitAndUnit(height)}</span>
        </li>
        <li className={css.item}>
          Tank <span>{addSpaceBetweenDigitAndUnit(tank)}</span>
        </li>
        <li className={css.item}>
          Consumption <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleItemDescription;