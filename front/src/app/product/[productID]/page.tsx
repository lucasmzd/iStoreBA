import { getProductsById } from "@/helpers/products.helper";
import ProductDetail from "@/views/ProductDetail/ProductDetail";
import React from "react";

const Detail: React.FC<{params: { productID: string }}> = async ({ params }) => {
  const product = await getProductsById(params.productID)
  return <ProductDetail {...product}/>;
};

export default Detail;
