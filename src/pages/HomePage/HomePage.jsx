import { useEffect, useState } from 'react';
import { getMovieTrend } from '../../services/movies';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      setError(false);

      try {
        const { results } = await getMovieTrend();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, []);

  return (
    <section className="container">
      <Header title={'Trend today'} />
      {movies.length > 0 && !loading && <MovieList data={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </section>
  );
};

export default HomePage;
