import { BiSolidErrorCircle } from 'react-icons/bi';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <BiSolidErrorCircle className={css.errorIcon} />
      <p className={css.errorText}>Please reload you page!</p>
    </div>
  );
};

export default ErrorMessage;
