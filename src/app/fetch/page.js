"use client";

import { useState, useEffect } from "react";

const Page = () => {
  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
    }
    fetchProducts(data);
  }, []);
  //Vi må skrive if her, da den ikke er inde i return
  if (!products) {
    return <div>Loading!!!</div>;
  }

  return (
    <ul>
      {products.products.map((product) => {
        return <li>{product.category}</li>;
      })}
    </ul>
  );
};

export default Page;
