import './styles.css';
import MainImg from 'assets/images/main-img.svg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container container-fluid">
      <div className="card-top-container">
        <div className="top-image-container">
          <img src={MainImg} alt="Imagem principal" />
        </div>

        <div className="top-header-container">
          <h1>O carro perfeito para você</h1>
        </div>

        <div className="top-content-container">
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>

      <div className="card-bottom-container">
        <button className="btn btn-secondary btn-icon"><Link to="/products">VER CATÁLOGO</Link></button>
        <span>Comece agora a navegar</span>
      </div>
    </div>
  );
};

export default Home;
