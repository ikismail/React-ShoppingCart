import "rc-pagination/assets/index.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ContentLoader } from "../../shared";
import { fetchAllProducts } from "../../store/actions/product.action";
import { Product } from "../../store/model/product";
import ProductCard from "./productCard";

const Productslist = (props: {
  products: Product[];
  fetchAllProducts: () => {};
}) => {
  const { products, fetchAllProducts } = props;
  useEffect(() => {
    fetchAllProducts();
  }, []);

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

const mapStateToProps = (state: {
  products: {
    products: Product[];
    filter: { seller: string; category: string };
  };
}) => ({
  products: state.products.products,
  filter: state.products.filter
});

const mapDispatchToProps = {
  fetchAllProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Productslist);
