import {
  defaultImg,
  urlImg,
  defaultTitle,
  defaultDate,
} from '../../services/api';
import css from './MovieCard.module.css';

const MovieCard = ({ data: { title, poster_path, release_date } }) => {
  return (
    <>
      <img
        className={css.avatarImg}
        src={poster_path ? urlImg + poster_path : defaultImg}
        alt={'avatar ' + (title || defaultTitle)}
        loading="lazy"
      />
      <div className={css.cardContent}>
        <hr className={css.hr} />
        <p className={css.cardTitle}>{title || defaultTitle}</p>
        <p className={css.cardDate}>{release_date || defaultDate}</p>
      </div>
    </>
  );
};

export default MovieCard;
