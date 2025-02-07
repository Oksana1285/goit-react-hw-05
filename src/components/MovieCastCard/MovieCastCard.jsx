import { IMG_URL, DEFAULT_IMG_URL } from '../../services/api';

import css from './MovieCastCard.module.css';

const MovieCastCard = ({ data: { profile_path, name, characte } }) => {
  return (
    <>
      <img
        className={css.castCardImage}
        src={profile_path ? IMG_URL + profile_path : DEFAULT_IMG_URL}
        alt={'avatar ' + name}
        loading="lazy"
      />

      <div className={css.castCardContent}>
        <p className={css.castCardTitle}>{name}</p>
        <p className={css.castCardDescription}>{characte}</p>
      </div>
    </>
  );
};

export default MovieCastCard;
