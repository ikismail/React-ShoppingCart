import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Product } from "../../store/model/product";
import { fetchBestProducts } from "../../store/actions/product.action";
import ProductCard from "./productCard";
import { ContentLoader } from "../../shared/";

const BestProducts = (props: {
  bestProducts: Product[];
  fetchBestProducts: () => {};
}) => {
  const { bestProducts, fetchBestProducts } = props;

  useEffect(() => {
    fetchBestProducts();
  }, [fetchBestProducts]);

  const iterateProducts = () => {
    if (bestProducts.length === 0) {
      return <ContentLoader />;
    }

    return bestProducts.slice(0, 4).map((product: Product) => (
      <div className='col-md-3' key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  };

  return <div className='row'>{iterateProducts()}</div>;
};

const mapStateToProps = (state: { products: { bestProducts: Product[] } }) => ({
  bestProducts: state.products.bestProducts
});

const mapDispatchToProps = {
  fetchBestProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(BestProducts);
