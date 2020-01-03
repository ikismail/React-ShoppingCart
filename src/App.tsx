import React from "react";
import "./App.scss";

import { Navbar, Footer } from "./shared";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
