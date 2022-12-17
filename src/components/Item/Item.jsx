import './Item.css';


export default function Item({ item }) {
    return (
    
      <div
      className="image-div"
      style={{
        background: `url(${item.product.main_image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
      >
        <div>
          <p className='price'>Only &nbsp;${item.offers.primary.price}!</p>
        </div>
        <div className='title'>
        <article>{item.product.title}</article>
        </div>
        <button className='cartbtn'>Add to cart</button>
    </div>

    );
  }