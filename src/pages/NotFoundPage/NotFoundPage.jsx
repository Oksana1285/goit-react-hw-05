import { Link } from 'react-router-dom';
import css from './/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className="container">
      <div className={css.contentWrap}>
        <h1 className={css.contentTitle}>404</h1>
        <p className={css.contentText}>
          Page not found
          <span className={css.contentLink}>
            <Link to="/">Go To Home Page</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
