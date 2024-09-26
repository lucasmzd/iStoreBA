"use client";
import { IProduct, IUserSession } from "@/interfaces/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({ name, image, description, price, id, categoryId }) => {
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
      const productExist = cart.some((product: IProduct) => product.id === id);

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
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <img
          src={image}
          alt={`Imagen del ${name}`}
          className="w-full h-auto max-h-96 object-contain mb-4 rounded"
        />
        <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>
        <p className="text-lg mb-4 text-center">{description}</p>
        <p className="text-xl font-semibold mb-4 text-center">Precio: ${price}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
