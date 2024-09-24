"use client";
import { IProduct, IUserSession } from "@/interfaces/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({name, image, description, price, id, categoryId}) => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserSession>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const handleAddToCart = () => {
    if (!userData?.token) {
      Swal.fire({
        title: "Login required",
        icon: "error",
      });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id === id) return true;
        return false;
      });
      if (productExist) {
        Swal.fire({
          title: "Product already in cart",
        });
        router.push("/cart");
      } else {
        cart.push({ id, name, image, description, price, categoryId });
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          title: "Product added to cart",
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={`Imagen del ${name}`} />
      <p>{description}</p>
      <p>Precio ${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
