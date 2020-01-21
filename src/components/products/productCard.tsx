import React from "react";
import { Product } from "../../store/model/product";
import "../../config/styles/product-filter.scss";
import Icon from "../../shared/icon";

type ProductCardProps = {
  product: Product;
};

const styles = {
  cardImage: {
    maxHeight: "700px",
    maxWidth: "127.135px",
    margin: "auto"
  },
  footerIcons: {
    fontSize: "95%"
  },
  card: {
    height: "500px"
  },
  cardText: {
    height: "70px",
    overflow: "hidden"
  }
};

const ProductCardHeader = ({
  productName,
  productDescription
}: {
  productName: string;
  productDescription: string;
}) => {
  const { cardText } = styles;
  return (
    <>
      <h6 className='card-text' style={cardText}>
        {productName}.
      </h6>
      <p className='card-text' style={cardText}>
        {productDescription}.
      </p>
    </>
  );
};

const ProductCardImage = ({ productImage }: { productImage: string }) => {
  const { cardImage } = styles;
  return (
    <img
      className='card-img-top mt-2'
      alt={"Card cap"}
      src={productImage}
      style={cardImage}
    />
  );
};

const ProductCardFooter = () => {
  const { footerIcons } = styles;
  const leftSideButtons = () => {
    return ["View", "Edit"].map(btn => (
      <button type='button' className='btn btn-sm primary-btn' key={btn}>
        {btn}
      </button>
    ));
  };

  const rightSideButtons = () => {
    return ["fa-heart", "fa-shopping-cart"].map(icon => (
      // <button className='p-2' key={icon}>
      //   <i className={`fa ${icon}`}></i>
      // </button>
      <Icon key={icon} type={icon} />
    ));
  };

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='btn-group'>{leftSideButtons()}</div>
      <small className='text-muted' style={footerIcons}>
        {rightSideButtons()}
      </small>
    </div>
  );
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { card } = styles;
  return (
    <div className='mb-4 shadow-sm text-center border' style={card}>
      <ProductCardImage productImage={product.productImage} />
      <div className='card-body'>
        <ProductCardHeader
          productName={product.productName}
          productDescription={product.productDescription}
        />
        <ProductCardFooter />
      </div>
    </div>
  );
};

export default ProductCard;
