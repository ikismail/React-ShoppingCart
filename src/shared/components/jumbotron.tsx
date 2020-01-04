import React from "react";
import { Container, Jumbotron as RSJumbotron } from "reactstrap";

const Jumbotron = () => {
  return (
    <div>
      <RSJumbotron fluid>
        <Container className='text-center'>
          <h3 className='display-5'>Sample Heading</h3>
          <p className='lead'>Sample Description</p>
        </Container>
      </RSJumbotron>
    </div>
  );
};
export default Jumbotron;
