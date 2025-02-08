// import { useEffect, useState, useMemo, useRef } from 'react';
// import { Suspense } from 'react';
// import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// import css from './MovieDetailsPage.module.css';

// import MovieDetails from '../../components/MovieDetails/MovieDetails';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
// import Loader from '../../components/Loader/Loader';
// import NavigationSub from '../../components/NavigationSub/NavigationSub';
// import Header from '../../components/Header/Header';

// import { getMovieById } from '../../services/movies';

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const [movieDetail, setMovieDetail] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const location = useLocation();
//   const refLocation = useRef(location.state);
//   const backLink = useRef(location.state ?? '/movies');

//   useEffect(() => {
//     if (!movieId) return;
//     const handleMovieById = async () => {
//       setLoading(true);
//       setError(false);

//       try {
//         const data = await getMovieById(movieId);
//         setMovieDetail(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     handleMovieById();
//   }, [movieId]);

//   const genres = useMemo(() => {
//     return movieDetail?.genres?.map(genre => genre.name).join(', ') || 'N/A';
//   }, [movieDetail]);

//   const score = useMemo(() => {
//     if (!movieDetail || !movieDetail.vote_average || !movieDetail.vote_count)
//       return 'N/A';
//     return ((movieDetail.vote_average / movieDetail.vote_count) * 100).toFixed(
//       0
//     );
//   }, [movieDetail]);

//   return (
//     <section className="container">
//       <Header title={'Details info'} />

//       <Link to={refLocation}>
//         <button className={css.btnGoBack} type="button" aria-label="home page">
//           GoBack
//         </button>
//       </Link>

//       {movieId && !loading && (
//         <MovieDetails movieDetail={movieDetail} score={score} genres={genres} />
//       )}

//       {loading && <Loader />}

//       {error && <ErrorMessage />}

//       <h2 className={css.additionalText}>Additional information</h2>

//       <NavigationSub />
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </section>
//   );
// };

// export default MovieDetailsPage;

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
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useMemo(() => location.state?.from ?? '/movies', [location]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
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

    fetchMovieDetails();
  }, [movieId]);

  const genres = useMemo(() => {
    return movieDetail?.genres?.map(genre => genre.name).join(', ') || 'N/A';
  }, [movieDetail]);

  const score = useMemo(() => {
    return movieDetail?.vote_average
      ? movieDetail.vote_average.toFixed(1)
      : 'N/A';
  }, [movieDetail]);

  return (
    <section className="container">
      <Header title="Details info" />

      <Link to={backLink}>
        <button className={css.btnGoBack} type="button" aria-label="Go back">
          Go Back
        </button>
      </Link>

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieDetail && (
        <MovieDetails movieDetail={movieDetail} score={score} genres={genres} />
      )}

      <h2 className={css.additionalText}>Additional information</h2>
      <NavigationSub />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
