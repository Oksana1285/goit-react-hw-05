import {
  DEFAULT_IMG_URL,
  IMG_URL,
  DEFAULT_TITLE,
  DEFAULT_DATE,
} from '../../services/api';
import css from './MovieCard.module.css';

const MovieCard = ({ data: { title, poster_path, release_date } }) => {
  return (
    <>
      <img
        className={css.avatarImg}
        src={poster_path ? IMG_URL + poster_path : DEFAULT_IMG_URL}
        alt={'avatar ' + (title || DEFAULT_TITLE)}
        loading="lazy"
      />
      <div className={css.cardContent}>
        <hr className={css.hr} />
        <p className={css.cardTitle}>{title || DEFAULT_TITLE}</p>
        <p className={css.cardDate}>{release_date || DEFAULT_DATE}</p>
      </div>
    </>
  );
};

export default MovieCard;
