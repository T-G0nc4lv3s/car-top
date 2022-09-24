import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">

        <div className="container-fluid">
          <a href="link" className="nav-log-text ">
            <h2>Carros Top</h2>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cartop-navbar"
            aria-controls="cartop-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="cartop-navbar">
          <ul className="navbar-nav main-menu" >
            <li>
              <a href="link" className="active">Home</a>
            </li>

            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
