import { IProduct } from "@/interfaces/types";
import React from "react";

const ProductDetail: React.FC<IProduct> = ({name, image, description, price}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={`Imagen del ${name}`}/>
      <p>{description}</p>
      <p>Precio ${price}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetail;
