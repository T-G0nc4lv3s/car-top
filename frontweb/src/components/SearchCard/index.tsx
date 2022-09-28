import './styles.css';

const SearchCard = () => {
  return (
    <>
      <div className="search-card-container">
        <form action="" className="search-form">
          <div>
            <label htmlFor="ctrl-search"></label>
            <input
              className="input-box"
              id="ctrl-search"
              name="search"
              placeholder="Digite sua busca"
              type="text"
            />
          </div>
          <div className="btn-container">
            <input type="submit" value="Buscar" className="btn btn-secondary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchCard;
