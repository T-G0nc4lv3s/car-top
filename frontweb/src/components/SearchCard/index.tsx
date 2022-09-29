import './styles.css';

const SearchCard = () => {
  return (
    <>
      <div className="search-card-container">
        <div className="form-container">
          <form action="#">
            <div>
              <label htmlFor="ctrl-search"></label>
              <input type="text" id="ctrl-search" className="input-box" placeholder="Digite sua busca"/>
            </div>
          </form>
        </div>
        <div className="btn-container">
          <input type="submit" value="BUSCAR" className="btn btn-secondary"/>      
        </div>
      </div>
    </>
  );
};

export default SearchCard;
