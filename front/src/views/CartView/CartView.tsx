"use client";
import { createOrder } from "@/helpers/orders.helper";
import { IProduct, IUserSession } from "@/interfaces/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartView = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart?.map((item: IProduct) => {
          totalCart = totalCart + item.price;
        });
        setTotalCart(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = cart?.map((product) => product.id);
    await createOrder(idProducts, userData?.token!);
    Swal.fire({
      title: "Order created successfully!",
      icon: "success",
    });
    setCart([]);
    setTotalCart(0);
    localStorage.setItem("cart", "[]");
  };

  const handleClearCart = () => {
    setCart([]);
    setTotalCart(0);
    localStorage.setItem("cart", "[]");
    Swal.fire({
      title: "Cart cleared!",
      icon: "success",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8 w-full">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-5xl mb-4 relative">
        <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
        {cart.length > 0 && (
          <button
            onClick={handleClearCart}
            className="absolute top-6 right-6 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition"
          >
            Clear Cart
          </button>
        )}
        {cart && cart.length > 0 ? (
          cart?.map((item: IProduct) => {
            return (
              <div key={item.id} className="flex items-start w-full mb-4">
                <img
                  src={item.image}
                  alt={"Product image " + item.name}
                  className="w-32 h-32 object-cover mr-6"
                />
                <div className="flex flex-col justify-start">
                  <p className="text-lg font-semibold mt-2">{item.name}</p>
                  <p className="text-md text-gray-700 mt-2">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Your cart is empty</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
              Continue Shopping
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold mr-4">Total: ${totalCart.toFixed(2)}</p>
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
