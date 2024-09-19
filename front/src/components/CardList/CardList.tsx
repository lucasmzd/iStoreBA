import React from "react";
import Card from "../Card/Card";
import Link from "next/link";
import { getProductsDB } from "@/helpers/products.helper";

const CardList = async () => {
  const products = await getProductsDB();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {products &&
        products?.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Card {...product} />;
            </Link>
          );
        })}
    </div>
  );
};

export default CardList;
