import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Product } from "../../store/model/product";
import { fetchTopProducts } from "../../store/actions/product.action";
import ProductCard from "./productCard";
import { ContentLoader } from "../../shared/";

const TopProducts = (props: {
  topProducts: Product[];
  fetchTopProducts: () => {};
}) => {
  const { topProducts, fetchTopProducts } = props;

  useEffect(() => {
    fetchTopProducts();
  }, [fetchTopProducts]);

  const iterateProducts = () => {
    if (topProducts.length === 0) {
      return <ContentLoader />;
    }
    return topProducts.slice(0, 4).map((product: Product) => (
      <div className='col-md-3' key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  };
  return <div className='row'>{iterateProducts()}</div>;
};

const mapStateToProps = (state: { products: { topProducts: Product[] } }) => ({
  topProducts: state.products.topProducts
});

const mapDispatchToProps = {
  fetchTopProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(TopProducts);
