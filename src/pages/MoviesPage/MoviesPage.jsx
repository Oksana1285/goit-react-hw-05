import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieSearch } from '../../services/movies';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import SearchBox from '../../components/SearchBox/SearchBox';
import NotFoundMessage from '../../components/NotFoundMesagge/NotFoundMesagge';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(queryValue);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!queryValue) return;
    const handleSearchMovie1 = async () => {
      setLoading(true);
      setError(false);
      setMovies(null);
      setSearch('');

      try {
        const { results } = await getMovieSearch(queryValue);
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearchMovie1();
  }, [queryValue]);

  const handleSearchMovie = query => {
    setSearchParams(query);
  };

  return (
    <section className="container">
      <Header title={'Search movies'} />
      <SearchBox
        handleChange={query => setSearch({ search: query })}
        handleSearchMovie={handleSearchMovie}
      />
      {movies && <MovieList data={movies} />}
      {movies && movies.length === 0 && (
        <NotFoundMessage
          text={'Movies with search criteria not found'}
          className={css.text}
        />
      )}

      {loading && <Loader />}

      {error && <ErrorMessage />}
    </section>
  );
};

export default MoviesPage;
