import React from "react";
import { Jumbotron, SectionHeader } from "../shared/";
import { BestProducts, TopProducts } from "../components/products";

const Dashboard = () => {
  return (
    <>
      <Jumbotron />
      <SectionHeader title='Our Top Products' route='/products' />
      <TopProducts />
      <SectionHeader title='Our Best Products' route='/products' />
      <BestProducts />
    </>
  );
};

export default Dashboard;
