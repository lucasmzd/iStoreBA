import React from "react";
import { ICardProps } from "./types";

const Card:React.FC<ICardProps> = ({name, price, stock, description, image}) => {
    return (
        <div>
            <img src={image} alt="imagen de producto" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    )
}

export default Card