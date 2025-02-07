import css from './ReviewsCard.module.css';

import { IMG_URL, DEFAULT_IMG_URL } from '../../services/api';

const ReviewCard = ({ reviews }) => {
  return (
    <>
      {reviews.map(
        ({ author, content, id, author_details: { avatar_path, rating } }) => {
          const avatarUrl =
            avatar_path?.startsWith('/http') || avatar_path?.startsWith('http')
              ? avatar_path
              : avatar_path
              ? IMG_URL + avatar_path
              : DEFAULT_IMG_URL;

          return (
            <article key={id}>
              <h3 className={css.reviewCardTitle}>{'Author: ' + author}</h3>
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
                      {rating !== null && rating !== undefined
                        ? rating
                        : 'No rating'}
                    </span>
                  </p>
                  <p className={css.reviewCardDescription}>{content}</p>
                </div>
              </div>
            </article>
          );
        }
      )}
    </>
  );
};
export default ReviewCard;
