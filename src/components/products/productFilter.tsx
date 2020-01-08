import React from "react";
import "../../config/styles/product-filter.scss";

function ProductFilter() {
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
          <select className='form-control' id='filterPrdCty'>
            <option>Sample</option>
          </select>
        </div>
        <div className='form-group'>
          <label>By Seller:</label>
          <select className='form-control' id='filterPrdSlr'>
            <option>productSeller</option>
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
}

export default ProductFilter;
