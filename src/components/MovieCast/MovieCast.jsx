import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

import { getMovieCredits } from '../../services/movies';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import MovieCastCard from '../MovieCastCard/MovieCastCard';
import NotFoundMessage from '../NotFoundMesagge/NotFoundMesagge';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleMovieCredits = async () => {
      if (!movieId) return;

      setLoading(true);
      setError(false);

      try {
        const { movieCast } = await getMovieCredits(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleMovieCredits();
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {movieCast &&
        !loading &&
        movieCast.map(({ id, ...rest }) => {
          return (
            <li className={css.castItem} key={id}>
              <MovieCastCard data={rest} />
            </li>
          );
        })}
      {movieCast && movieCast.length === 0 && (
        <NotFoundMessage text={'Sorry, there are no cast for this movie'} />
      )}

      {loading && <Loader />}

      {error && <ErrorMessage />}
    </ul>
  );
};

export default MovieCast;
