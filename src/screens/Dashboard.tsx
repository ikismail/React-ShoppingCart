import React from "react";
import { Jumbotron, SectionHeader } from "../shared/";
import { BestProducts } from "../components/products";

const Dashboard = () => {
  return (
    <>
      <Jumbotron />
      <SectionHeader title='Sample Header' route='/' />
      <BestProducts />
      <SectionHeader title='Sample Header' route='/' />
      <BestProducts />
    </>
  );
};

export default Dashboard;
