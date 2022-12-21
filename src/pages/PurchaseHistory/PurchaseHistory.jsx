import Cart from "../Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

useEffect(function() {
  async function getOrders() {
    const orders = await ordersAPI.checkout();
    setActiveOrder(orders[0] || null);
    setOrders(orders);
  }
  getOrders();
}, []);

return (
  <main className="OrderHistoryPage">
    <h1>Order History</h1>
    {/* Render a Cart component (needs to be coded) */}
    <OrderHistory />
  </main>
);
}
