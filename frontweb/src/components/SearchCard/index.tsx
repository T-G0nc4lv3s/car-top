import './styles.css';
import { Link } from 'react-router-dom';

const SearchCard = () => {
  return (
    <>
      <div className="search-card-container">
        <div className="form-container">
          <form action="#">
            <div>
              <label htmlFor="ctrl-search"></label>
              <input
                type="text"
                id="ctrl-search"
                className="input-box"
                placeholder="Digite sua busca"
              />
            </div>
          </form>
        </div>
        <div className="btn-container">
          <button id="btn-search" className="btn btn-secondary">
            <Link to="/searches">BUSCAR</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
