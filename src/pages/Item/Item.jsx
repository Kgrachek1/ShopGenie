import './Item.css';


export default function Item({ item }) {
    return (
      <div>
        <div
          className="image-div"
          style={{
            background: `url(${item.product.main_image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="title">
            <h4>{item.product.title}</h4>
            <div>${item.offers.primary.price}</div>
          </div>
        </div>
      </div>
    );
  }