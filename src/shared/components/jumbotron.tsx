import React from "react";
import { Container, Jumbotron as RSJumbotron } from "reactstrap";
import "../../config/themes.scss";
const Jumbotron = () => {
  return (
    <div>
      <RSJumbotron fluid>
        <Container className='text-center'>
          <img alt='Vue logo' src='./logo512.png' width='100px' />
          <h3 className='display-5 primary'>ikismail - ReactShop</h3>
          <p className='lead'>
            A ShoppingCart (Ecommerce) Application using ReactJs.
          </p>
        </Container>
      </RSJumbotron>
    </div>
  );
};
export default Jumbotron;
