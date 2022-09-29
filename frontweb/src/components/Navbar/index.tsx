import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-primary main-nav">
        <div className="container-fluid">
          <Link to="/" className="nav-log-text ">
            <h2>Carros Top</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cartop-navbar"
            aria-controls="cartop-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="cartop-navbar">
          <ul className="navbar-nav main-menu">
            <li>
              < NavLink to="/" exact activeClassName="active">
                Home
              </ NavLink>
            </li>

            <li>
              < NavLink to="/products" activeClassName="active">Catálogo</ NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
