import React from "react";
import { Product } from "../../store/model/product";

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
    height: "490px"
  },
  cardText: {
    height: "70px",
    overflow: "hidden"
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { footerIcons, card, cardText, cardImage } = styles;
  return (
    <div className='cardTemplate'>
      <div className='mb-4 shadow-sm text-center' style={card}>
        <img
          className='card-img-top mt-2'
          alt={"Card cap"}
          src={product.productImage}
          style={cardImage}
        />
        <div className='card-body'>
          <h6 className='card-text' style={cardText}>
            {product.productName}.
          </h6>
          <p className='card-text' style={cardText}>
            {product.productDescription}.
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'>
                View
              </button>

              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'>
                Edit
              </button>
            </div>
            <small className='text-muted' style={footerIcons}>
              <button className='p-2'>
                <i className='fa fa-heart'></i>
              </button>
              <button className='p-2'>
                <i className='fa fa-shopping-cart'></i>
              </button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
