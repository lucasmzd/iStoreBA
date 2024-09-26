import React from "react";
import { ICardProps } from "./types";

const Card:React.FC<ICardProps> = ({name, price, stock, description, image}) => {
  return (
    <div className="flex flex-row items-center rounded-lg gap-4 justify-center border p-2">
      <img className= "max-w-[200px]" src={image} alt="imagen de producto" />
      <div className="flex flex-col w-full h-full items-center justify-center gap-6">
        <h1 className="font-semibold text-s">{name}</h1>
        <h2 className="text-s">Price: {price}</h2>
        <p className="text-s">Stock: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
