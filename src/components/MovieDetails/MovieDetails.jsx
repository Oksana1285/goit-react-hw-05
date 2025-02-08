import { urlImg, defaultImg } from '../../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = ({
  movieDetail: { backdrop_path, title, overview },
  genres,
  score,
}) => {
  return (
    <div className={css.detailsWrap}>
      <img
        className={css.detailsImage}
        src={backdrop_path ? urlImg + backdrop_path : defaultImg}
        alt={title}
      />
      <div className={css.details}>
        <p className={css.detailsTitle}>{title}</p>
        <span className={css.detailsScore}>User Score: {score}%</span>
        <span className={css.detailsOverview}>Overview</span>
        <p className={css.overviewText}>{overview}</p>
        <span className={css.detailsGenres}>Genres</span>
        <p className={css.detailsText}>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
