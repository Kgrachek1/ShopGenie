import OrderHistoryItem from "../OrderHistoryItem/OrderHistoryItem";

export default function OrderHistory({orders, activeOrder, setActiveOrder}) {
const OrderHistoryList = orders.map(order => <OrderHistoryItem
    order={order}
    activeOrder={activeOrder}
    setActiveOrder={setActiveOrder}
    key={order.id}
    />);
    
return ( 
<div className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
    {OrderHistoryList}
</div>

   
)
};