import './styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary main-nav">

        <div className="container-fluid">
          <a href="link" className="nav-log-text ">Carros Top</a>
        </div>

        <div className="collapse navbar-collapse">
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
