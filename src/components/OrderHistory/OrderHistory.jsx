


export default function OrderHistory(orders, activeOrder, setActiveOrder) {
const OrderHistoryList = orders.map(order => <OrderHistory
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