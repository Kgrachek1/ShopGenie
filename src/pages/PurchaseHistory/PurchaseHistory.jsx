import './PurchaseHistory.css'
import { useState } from "react";
import { useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

useEffect(function() {
  async function getOrders() {
    const orders = await ordersAPI.getAllForUser();
    setActiveOrder(orders[0] || null);
    setOrders(orders);
    console.log(orders)
  }
  getOrders();
}, []);

return (
  <main className="OrderHistoryPage">
    <h1>Order History</h1>
    {/* Render a Cart component (needs to be coded) */}
    <OrderHistory orders={orders} setOrders={setOrders} activeOrder={activeOrder} setActiveOrder={setActiveOrder}/>
  </main>
);
}
