import { useEffect, useState, useMemo } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import css from './MovieDetailsPage.module.css';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import NavigationSub from '../../components/NavigationSub/NavigationSub';
import Header from '../../components/Header/Header';

import { getMovieById } from '../../services/movies';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const refLocation = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    const handleMovieById = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await getMovieById(movieId);
        setMovieDetail(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleMovieById();
  }, [movieId]);

  const genres = useMemo(() => {
    return movieDetail?.genres?.map(genre => genre.name).join(', ') || 'N/A';
  }, [movieDetail]);

  const score = useMemo(() => {
    if (!movieDetail || !movieDetail.vote_average || !movieDetail.vote_count)
      return 'N/A';
    return ((movieDetail.vote_average / movieDetail.vote_count) * 100).toFixed(
      0
    );
  }, [movieDetail]);

  return (
    <section className="container">
      <Header title={'Details info'} />

      <Link to={refLocation}>
        <button className={css.btnGoBack} type="button" aria-label="home page">
          GoBack
        </button>
      </Link>

      {movieId && !loading && (
        <MovieDetails movieDetail={movieDetail} score={score} genres={genres} />
      )}

      {loading && <Loader />}

      {error && <ErrorMessage />}

      <h2 className={css.additionalText}>Additional information</h2>

      <NavigationSub />
      <Suspense>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
