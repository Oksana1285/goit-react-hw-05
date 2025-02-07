import css from './Header.module.css';
import clsx from 'clsx';

const Header = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};

export default Header;
