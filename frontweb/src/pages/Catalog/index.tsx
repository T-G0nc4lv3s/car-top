import './styles.css';

import SearchCard from 'components/SearchCard';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <SearchCard />
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
