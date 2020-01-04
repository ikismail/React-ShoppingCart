import React from "react";
import "./App.scss";

import { Navbar, Footer } from "./shared";
import AppRouter from "./router";
import { Container } from "reactstrap";

const App = () => {
  return (
    <Container>
      <Navbar />
      <AppRouter />
      <Footer />
    </Container>
  );
};

export default App;
