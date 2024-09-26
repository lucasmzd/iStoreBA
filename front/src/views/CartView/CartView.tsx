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

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8">
      <div className="bg-white p-8 rounded shadow-md w-96 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
        {cart && cart.length > 0 ? (
          cart?.map((item: IProduct) => {
            return (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <img src={item.image} alt={"Product image " + item.name} className="w-16 h-16 object-cover" />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm">Price: ${item.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
        <div className="flex flex-col items-center mt-4">
          <p className="text-lg font-semibold">Total: ${totalCart}</p>
          {cart.length <= 0 ? (
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition mt-4">
              Continue Shopping
            </Link>
          ) : (
            <button onClick={handleClick} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-4">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartView;
