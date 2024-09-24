"use client"
import { IProduct, IUserSession } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({name, image, description, price}) => {

  const [userData, setUserData] = useState<IUserSession>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const handleAddToCart = () => {
    if(!userData?.token){
      Swal.fire({
        title: "Login required",
        icon: "error"
      });
    } else {
      alert("Added to cart"); // provisional
    }
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={`Imagen del ${name}`}/>
      <p>{description}</p>
      <p>Precio ${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
