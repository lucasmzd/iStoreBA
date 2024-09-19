import React from "react";
import { ICardProps } from "./types";

const Card:React.FC<ICardProps> = ({name, price, stock, description, image}) => {
  return (
    <div className="flex flex-row items center rounded-lg gap-4 justify-center border p-2">
      <img className= "max-h-[250px]" src={image} alt="imagen de producto" />
      <div className="flex flex-col w-full h-full items-center justify-center gap-6">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
