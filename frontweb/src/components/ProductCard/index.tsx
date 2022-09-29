import './styles.css';
import { ReactComponent as ProductImg } from 'assets/images/car-card.svg';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <>
      <div className="product-card-container">
        <div className="product-image-container">
          <ProductImg />
        </div>
        <span className="product-name">Audi Supra TT</span>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla.
          </p>
        </div>

        <button id="btn-purchase">
          <Link to="/sales">Comprar</Link>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
