import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';
import { getMovieReviews } from '../../services/movies';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import NotFoundMessage from '../NotFoundMesagge/NotFoundMesagge';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const handleMovieReviews = async () => {
      setLoading(true);
      setError(false);

      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleMovieReviews();
  }, [movieId]);

  return (
    <div className={css.content}>
      {reviews && reviews.length > 0 && <ReviewsCard reviews={reviews || []} />}
      {reviews && reviews.length === 0 && (
        <NotFoundMessage text={'Sorry, there are no reviews for this movie'} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Reviews;
