import { connect } from "react-redux";
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import { ContentLoader } from "../../shared";
import { Product } from "../../store/model/product";
import { fetchAllProducts } from "../../store/actions/product.action";
import "rc-pagination/assets/index.css";

const Productslist = (props: {
  products: Product[];
  fetchAllProducts: () => {};
}) => {
  const { products, fetchAllProducts } = props;
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const iterateProducts = () => {
    if (products.length === 0) {
      return <ContentLoader />;
    }

    return products.map((product: Product) => (
      <div className='col-md-4' key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  };

  return (
    <div className='products'>
      <div className='row'>{iterateProducts()}</div>
    </div>
  );
};

const mapStateToProps = (state: { products: { products: Product[] } }) => ({
  products: state.products.products
});

const mapDispatchToProps = {
  fetchAllProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Productslist);
