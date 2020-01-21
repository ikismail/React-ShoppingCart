import React, { useState, useEffect } from "react";
import "../../config/styles/product-filter.scss";
import { connect } from "react-redux";
import { Product } from "../../store/model/product";
import { updateFilter } from "../../store/actions/product.action";
import ProductService from "../../store/services/products.service";

const ProductFilter = ({ updateFilter }: { updateFilter: any }) => {
  const [selectedCategory, setCategory] = useState<string>("All");
  const [selectedSeller, setSeller] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(ProductService.getAllProducts());
  }, []);

  const categorgyFilteredProduct: Product[] = [];
  const sellerFilteredProduct: Product[] = [];
  // eslint-disable-next-line array-callback-return
  products.filter((prod: Product) => {
    const i = categorgyFilteredProduct.findIndex(
      (prdct: Product) => prdct.productCategory === prod.productCategory
    );
    const j = sellerFilteredProduct.findIndex(
      (prdct: Product) => prdct.productSeller === prod.productSeller
    );
    if (i <= -1) {
      categorgyFilteredProduct.push({ ...prod });
    }
    if (j <= -1) {
      sellerFilteredProduct.push({ ...prod });
    }
  });

  const categories: string[] = categorgyFilteredProduct.map(
    (prod: Product) => prod.productCategory
  );
  categories.unshift("All");
  const sellers = sellerFilteredProduct.map(
    (prod: Product) => prod.productSeller
  );
  sellers.unshift("All");

  const onSelectChange = (event: any, type: string) => {
    const value = event.target.value;

    if (type === "productCategory") {
      setCategory(value);
    }
    if (type === "productSeller") {
      setSeller(value);
    }
    // Triggering update Action
    updateFilter(value, type);
  };

  return (
    <div className='productFilter'>
      <div id='prdfilter'>
        <h4 className='d-flex mb-3'>
          <span className='text-muted'>Filters:</span>
        </h4>
        <div className='form-group createProduct'>
          <button className='btn primary-btn w-100'>Create New Product</button>
        </div>
        <div className='form-group'>
          <label>By Category:</label>
          <select
            className='form-control'
            id='filterPrdCty'
            value={selectedCategory}
            onChange={text => onSelectChange(text, "productCategory")}>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label>By Seller:</label>
          <select
            className='form-control'
            id='filterPrdSlr'
            value={selectedSeller}
            onChange={text => onSelectChange(text, "productSeller")}>
            {sellers.map(seller => (
              <option value={seller} key={seller}>
                {seller}
              </option>
            ))}
          </select>
        </div>
        <ul className='list-group'>
          <li className='list-group-item'>Cras justo odio</li>
          <li className='list-group-item'>Dapibus ac facilisis in</li>
          <li className='list-group-item'>Morbi leo risus</li>
          <li className='list-group-item'>Porta ac consectetur ac</li>
          <li className='list-group-item'>Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { products: { products: [] } }) => ({
  products: state.products.products
});

const mapDispatchToProps = {
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
