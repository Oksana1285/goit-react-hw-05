import css from './ReviewsCard.module.css';

import { urlImg, defaultImg } from '../../services/api';

const ReviewCard = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews available.</p>;
  }

  return (
    <>
      {reviews.map(({ author, content, id, author_details }) => {
        const { avatar_path, rating } = author_details;
        const avatarUrl = avatar_path
          ? avatar_path.startsWith('http')
            ? avatar_path
            : urlImg + avatar_path
          : defaultImg;

        return (
          <article key={id} className={css.reviewCard}>
            <h3 className={css.reviewCardTitle}>{`Author: ${author}`}</h3>
            <div className={css.reviewCardContentWrap}>
              <img
                className={css.reviewCardImage}
                src={avatarUrl}
                alt={`${author} avatar`}
              />
              <div className={css.reviewCardContent}>
                <p className={css.reviewCardRating}>
                  Rating:
                  <span className={css.reviewCardRatingValue}>
                    {rating ?? 'No rating'}
                  </span>
                </p>
                <p className={css.reviewCardDescription}>{content}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ReviewCard;
