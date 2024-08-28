import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import React, { useContext, useEffect, useState } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (error) {
    const errorMsg =
      error?.data?.message || error?.message || "Something went wrong";
    return <Message variant={"danger"}>{errorMsg}</Message>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h3>All products</h3>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
