import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import Button from './Button';
import Icon from './Icon';
import { changeFilter } from '../redux/filters/filtersSlice';
import css from './Filters.module.css';

const INITIAL_DATA = {
  location: '',
  vehicleEquipment: [],
  vehicleType: '',
};

const VEHICLE_EQUIPMENT = [
  { label: 'AC', value: 'AC', icon: 'icon-ac' },
  { label: 'Automatic', value: 'automatic', icon: 'icon-automatic' },
  { label: 'Kitchen', value: 'kitchen', icon: 'icon-kitchen' },
  { label: 'TV', value: 'TV', icon: 'icon-tv' },
  { label: 'Bathroom', value: 'bathroom', icon: 'icon-bathroom' },
];

const VEHICLE_TYPE = [
  { label: 'Van', value: 'panelTruck', icon: 'icon-van' },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: 'icon-fully-integrated',
  },
  { label: 'Alcove', value: 'alcove', icon: 'icon-alcove' },
];

const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(changeFilter(values));
  };

  return (
    <div>
      <Formik initialValues={INITIAL_DATA} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.location}>
              <label htmlFor="location" className={css.locationLabel}>
                Location
              </label>
              <div className={css.inputWrapper}>
                <Icon name="icon-map" className="iconMap" />
                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.locationInput}
                  aria-label="Location"
                />
              </div>
            </div>
            <h3 className={css.title}>Filters</h3>
            <div className={css.vehicleEquipment}>
              <h4 className={css.subTitle}>Vehicle equipment</h4>
              <hr className={css.separator} />
              <div className={css.equipmentOptions}>
                {VEHICLE_EQUIPMENT.map(item => (
                  <label key={item.value} className={css.equipmentLabel}>
                    <Field
                      type="checkbox"
                      name="vehicleEquipment"
                      value={item.value}
                      checked={values.vehicleEquipment.includes(item.value)}
                      className={css.checkbox}
                      onChange={() =>
                        setFieldValue(
                          'vehicleEquipment',
                          values.vehicleEquipment.includes(item.value)
                            ? values.vehicleEquipment.filter(
                                item => item !== item.value
                              )
                            : [...values.vehicleEquipment, item.value]
                        )
                      }
                      aria-label={item.label}
                    />
                    <Icon name={item.icon} />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>
            <div className={css.vehicleType}>
              <h4 className={css.subTitle}>Vehicle type</h4>
              <hr className={css.separator} />
              <div className={css.vehicleTypeOptions}>
                {VEHICLE_TYPE.map(item => (
                  <label key={item.value} className={css.vehicleTypeLabel}>
                    <Field
                      type="radio"
                      name="vehicleType"
                      value={item.value}
                      className={css.radioButton}
                      aria-label={item.label}
                    />
                    <Icon name={item.icon} />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>
            <Button type="submit" aria-label="Search">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;