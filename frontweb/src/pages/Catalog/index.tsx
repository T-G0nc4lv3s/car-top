import './styles.css';
import Navbar from 'components/Navbar';
import SearchCard from 'components/SearchCard';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <SearchCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
