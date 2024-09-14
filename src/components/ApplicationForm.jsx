import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import clsx from 'clsx';

import Button from './components/Button/Button';
import { messages } from './utils/messages';
import css from './ApplicationForm.module.css';
import './DatePicker.css';

const INITIAL_DATA = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const ApplicationFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Application date is required'),
  comment: Yup.string(),
});

const ApplicationForm = () => {
  const [startDate, setStartDate] = useState(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleApplication = (values, { resetForm }) => {
    messages.success(
      `Dear ${values.name}, your booking is confirmed! 🚍 Thank you!`
    );

    resetForm();
    setStartDate(null);
  };

  return (
    <Formik
      initialValues={INITIAL_DATA}
      validationSchema={ApplicationFormSchema}
      onSubmit={handleApplication}
    >
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.field}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={css.field}>
            <DatePicker
              selected={startDate}
              closeOnScroll={true}
              onChange={date => {
                setStartDate(date);
                setFieldValue('date', date);
              }}
              startDate={today}
              minDate={tomorrow}
              dateFormat="MMMM d, yyyy"
              highlightDates={[today]}
              placeholderText="Application date*"
              className={css.input}
            />
            <ErrorMessage className={css.error} name="date" component="span" />
          </div>

          <div className={css.field}>
            <Field
              className={clsx(css.input, css.comment)}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <Button selfcenter type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicationForm;