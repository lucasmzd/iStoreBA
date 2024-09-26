"use client";
import { IOrder, IUserSession, IProduct } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import { getOrders } from "@/helpers/orders.helper";
import { useRouter } from "next/navigation";
import Link from "next/link";

const OrdersView = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const fetchData = async () => {
    const ordersResponse = await getOrders(userData?.token!);
    setOrders(ordersResponse);
  };

  useEffect(() => {
    if (userData?.user.name) {
      userData?.user.name === undefined ? router.push("/login") : fetchData();
    }
  }, [userData?.user]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8 w-full">
      {orders && orders.length > 0 ? (
        orders.map((order: IOrder) => {
          const totalPrice = order.products.reduce(
            (total, product: IProduct) => {
              return total + product.price;
            },
            0
          );

          return (
            <div
              key={order.id}
              className="bg-white p-6 rounded shadow-md w-full max-w-5xl mb-4"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">
                  <p>
                    Order {order.id}. Status: {order.status.toLocaleUpperCase()}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>{new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {order.products.map((product: IProduct) => (
                  <div key={product.id} className="flex items-start w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover mr-6"
                    />
                    <div className="flex flex-col justify-start">
                      <p className="text-lg font-semibold mt-2">
                        {product.name}
                      </p>
                      <p className="text-md text-gray-700 mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-md text-gray-600 mt-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <p className="text-lg font-bold">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl text-center">
          <p className="text-lg font-semibold mb-4">No products in orders</p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrdersView;
