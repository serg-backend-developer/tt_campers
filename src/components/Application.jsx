import ApplicationForm from './ApplicationForm/ApplicationForm';
import css from './Application.module.css';

const Application = () => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <h4 className={css.title}>Book your campervan now</h4>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Application;