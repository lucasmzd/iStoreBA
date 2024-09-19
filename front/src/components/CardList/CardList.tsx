import React from "react";
import productsToPreLoad from "@/helpers/products";
import Card from "../Card/Card";

const CardList = () => {
  const products = productsToPreLoad;
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {products &&
        products?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
    </div>
  );
};

export default CardList;
