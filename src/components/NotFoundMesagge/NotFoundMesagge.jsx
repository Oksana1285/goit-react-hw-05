import css from './NotFoundMesagge.module.css';

const NoFoundMessage = ({ text }) => {
  return <div className={css.noFound}>{text}</div>;
};

export default NoFoundMessage;
