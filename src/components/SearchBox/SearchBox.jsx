import css from './SearchBox.module.css';

const SearchBox = ({ handleChange, handleSearchMovie, query }) => {
  const onChangeHandle = event => {
    handleChange(event.target.value);
  };

  const onSubmitHandle = event => {
    event.preventDefault();
    handleSearchMovie({ query: event.target.elements.query.value });
  };

  return (
    <form className={css.searchForm} onSubmit={onSubmitHandle}>
      <input
        className={css.searchInput}
        onChange={onChangeHandle}
        name="query"
        value={query}
        type="search"
        required
      />
      <button
        className={css.searchButton}
        type="submit"
        aria-label="search button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
