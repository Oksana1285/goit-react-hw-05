import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <ul className={css.listList}>
      {data.map(({ id, ...rest }) => (
        <li key={id} className={css.listItem}>
          <Link to={`/movies/${id}`} state={location}>
            <MovieCard data={rest} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
